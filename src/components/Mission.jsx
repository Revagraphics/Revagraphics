// src/components/MissionVisionSection.tsx
import { useState } from 'react';

const Mission = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    {
      id: 'mission',
      icon: 'fas fa-rocket',
      label: 'Our Mission',
      content: 'We are on a mission to satisfy all our valuable clients through high-quality and result-oriented Digital Design and Branding Services across the globe. Our creative and innovative ideas help businesses transform into memorable brands through websites and creatives that provide enormous brand value over time.'
    },
    {
      id: 'vision',
      icon: 'far fa-eye',
      label: 'Our Vision',
      content: 'Our Vision to break the digital world with our highly innovative thought leadership and delivering capacity is bolstered by our team of industry experts, who have proven their expertise in the field of Digital Marketing. From the inception of a project, through its delivery and beyond, we diligently work to understand our clients and provide them with intelligent digital design solutions and support.'
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="bg-[#fbf1ef] py-20">
      <div className="max-w-[90%]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-10">

          {/* Tabs Navigation */}
          <div className="lg:w-1/3 w-full">
            <div className="flex lg:flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`bestfont flex w-full items-center gap-4 rounded-3xl px-7 py-5 text-left text-lg font-medium transition-all duration-200 border ${
                    activeTab === tab.id
                      ? 'bg-blue-[#ffdbca] text-orange-600 shadow-xl shadow-orange-500/30 border-orange-600'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-100'
                  }`}
                >
                  <i className={`${tab.icon} text-3xl`}></i>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3 sm:w-1/2">
            <div className="tab-bg min-h-[380px] rounded-3xl  p-6 lg:p-12 ">
              {activeContent && (
                <div>
                  <h3 className="mb-6 text-3xl font-semibold text-gray-900 bestfont">
                    {activeContent.label}
                  </h3>
                  <p className="bestfont text-[17px] leading-relaxed text-gray-600">
                    {activeContent.content}
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;