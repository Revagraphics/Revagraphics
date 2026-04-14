import targets from "../assets/target.svg?url";
import time from "../assets/fast-time.svg?url";
import united from "../assets/united.svg?url";
import emp from "../assets/employee.png?url";
import teamwork from "../assets/teamwork.png?url";
import quality from "../assets/qc.png?url";

const Ethics = () => {


  const cards = [
    {
      id: 1,
      icon: targets,
      title: "Client-centric Approach",
      description: "We are known for our positive and personalized experience to the customers due to our outstanding client-centric approach."
    },
    {
      id: 2,
      icon: time,
      title: "Service Delivered in Time",
      description: "We understand the value of time and henceforth we always deliver the assigned task on time."
    },
    {
      id: 3,
      icon: united,
      title: "Effective Collaboration",
      description: "Our team is very effective and efficient and we create a culture of cooperation between you and us to achieve our goals."
    },
    {
      id: 4,
      icon: emp,
      title: "Employee Benefits",
      description: "Our software house has been recognised by google for outstanding android application quality."
    },
    {
      id: 5,
      icon: teamwork,
      title: "Team Work",
      description: "Team work enables to share ideas and responsibilities which increases mutual support and creates confidence in a self being."
    },
    {
      id: 6,
      icon: quality,
      title: "Quality of Service",
      description: "Our software house has been recognised by google for outstanding android application quality."
    }
  ];

  return (
    <section className="r-bg-x py-20 md:py-24">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#30303c] leading-tight">
            Transparency and Ethics
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Transparency is an attribute of corporate culture that’s revealed through the behaviors 
            of an organization’s leaders, employees, and stakeholders.
          </p>
        </div>

        {/* Cards Grid - Highly Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, index) => (
            <div 
              key={card.id}
              className={`ree-card r-bg-c group rounded-3xl p-8 md:p-10 bg-[#f7f7f7] duration-300 hover:shadow-xl hover:-translate-y-2 ${
                index >= 3 ? 'lg:mt-10' : ''
              }`}
            >
              {/* Icon */}
              <div className="ree-card-img mb-10">
                <img 
                  src={card.icon} 
                  alt={card.title}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="ree-card-content">
                <h3 className="text-2xl font-semibold text-[#30303c] mb-5 leading-tight">
                  {card.title}
                </h3>
                <p className="text-[#30303c] leading-relaxed text-[17px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ethics;