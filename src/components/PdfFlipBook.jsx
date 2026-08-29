import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

// Use HTTPS so the worker is not blocked when the app runs on local HTTP.
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const PdfPage = React.forwardRef((props, ref) => {
  return (
    <div className="pdf-flip-page" ref={ref}>
      <div className="pdf-flip-page-content">{props.children}</div>
    </div>
  );
});

export default function PdfFlipBook({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(320);
  const [loadError, setLoadError] = useState(null);
  const viewerRef = useRef(null);
  const bookRef = useRef(null);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return undefined;

    const updateSize = () => {
      const { width, height } = viewer.getBoundingClientRect();
      const isMobile = width < 720;
      const availableWidth = isMobile ? width - 24 : width / 2 - 16;
      const availableHeight = Math.max(360, height - 24);
      const pdfRatio = 0.707;
      const nextWidth = Math.max(
        280,
        Math.min(760, availableWidth, availableHeight * pdfRatio),
      );

      setPageWidth(Math.floor(nextWidth));
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(viewer);
    updateSize();
    return () => observer.disconnect();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setLoadError(null);
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    setLoadError(error);
    setNumPages(null);
  }

  return (
    <div
      ref={viewerRef}
      className="pdf-flip-viewer flex min-h-0 w-full flex-1 flex-col items-center"
    >
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<p className="text-sm text-neutral-500">Opening catalogue...</p>}
        error={
          <p className="max-w-sm text-center text-sm text-red-600">
            This catalogue could not be opened. Please try again later.
          </p>
        }
      >
        {numPages && (
          <HTMLFlipBook
            key={`${pageWidth}-${numPages}`}
            width={pageWidth}
            height={Math.round(pageWidth / 0.707)}
            size="stretch"
            minWidth={280}
            maxWidth={900}
            minHeight={400}
            maxHeight={1200}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            ref={bookRef}
            startPage={0}
            useMouseEvents={true}
            flippingTime={850}
            drawShadow={true}
            className="pdf-flip-book shadow-2xl"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <PdfPage key={`page_${index + 1}`}>
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading={<div className="pdf-page-loading" />}
                />
                <p className="pdf-page-number">
                  {index + 1} / {numPages}
                </p>
              </PdfPage>
            ))}
          </HTMLFlipBook>
        )}
      </Document>

      {numPages && (
        <div className="mt-6 flex items-center gap-6">
          <button
            onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-700 transition"
          >
            ← Previous
          </button>
          <span className="text-sm text-neutral-600 font-medium">
            {numPages} pages
          </span>
          <button
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-700 transition"
          >
            Next →
          </button>
        </div>
      )}
      {loadError && !numPages && (
        <p className="mt-4 text-xs text-neutral-500">{pdfUrl}</p>
      )}
    </div>
  );
}