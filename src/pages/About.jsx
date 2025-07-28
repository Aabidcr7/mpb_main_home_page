import React from 'react';
import Button from '@/components/ui/Button';
import ChipView from '@/components/ui/ChipView';
import Footer from '@/components/common/Footer';
const About = () => {
  const chipItems = [
    'Investor-Ready',
    'Mentorship', 
    'Network Access',
    'Valuation Support',
    'Credibility Boost'
  ];

  const impactStats = [
    {
      number: '45',
      suffix: 'CR',
      plus: '+',
      label: 'Fund Raised',
      image: '/images/img_jkvlzyitdnjgyuz.png'
    },
    {
      number: '45',
      suffix: '',
      plus: '+',
      label: 'Startups Funded',
      image: '/images/img_jkvlzyitdnjgyuz.png'
    },
    {
      number: '79',
      suffix: '',
      plus: '+',
      label: 'Industry Mentors',
      image: '/images/img_jkvlzyitdnjgyuz.png'
    },
    {
      number: '7',
      suffix: '',
      plus: '+',
      label: 'Years of experience',
      image: '/images/img_jkvlzyitdnjgyuz.png'
    }
  ];

  const services = [
    {
      icon: '/images/img_icon_wrap_gray_100.png',
      title: 'Investor-Ready Advisory',
      description: 'From refining your business plan to assessing your valuation, we ensure you are presenting your startup in the best possible light.'
    },
    {
      icon: '/images/img_icon_wrap_gray_100.png',
      title: 'Access to Capital',
      description: 'Connect with over 558,000+ investors—including VCs, angels, HNIs, CSR funds, and impact investors.'
    },
    {
      icon: '/images/img_icon_wrap_gray_100.png',
      title: 'Smart Support Infrastructure',
      description: 'We provide resources like Virtual Data Rooms, mock pitches, and credibility-building strategies to accelerate your fundraising journey.'
    },
    {
      icon: '/images/img_icon_wrap_gray_100.png',
      title: 'Regulatory Edge',
      description: 'Benefit from guidance on DPIIT registration, Angel Tax exemptions, and other startup-friendly policies.'
    }
  ];

  const fundingTypes = [
    { icon: '/images/img_icon_wrap.png', label: 'Debt' },
    { icon: '/images/img_icon_wrap.png', label: 'Grants' },
    { icon: '/images/img_icon_wrap.png', label: 'Equity' }
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-3 overflow-y-auto">
      {/* Hero Section */}
      <section className="w-full bg-global-3">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] pt-[81px] sm:pt-[120px] md:pt-[140px] lg:pt-[162px]">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-[36px] justify-start items-center w-full">
            {/* Hero Content */}
            <div className="flex flex-col justify-start items-center w-full max-w-[726px]">
              <h1 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6 text-center"
  style={{ letterSpacing: '-2px' }} >
                <span className="text-global-4" style={{ color: '#5d248f' }}>Empowering Entrepreneurs</span>
                <span className="text-global-1" style={{ color: '#5d248f' }}> </span>
                <br className="sm:hidden" />
                <span className="text-global-4" style={{ color: '#5d248f' }}>to</span>
                <span className="text-global-1"> </span>
                <span className="text-[#fc5109]">Raise Funds Like a Pro</span>
              </h1>
              
              <p className="text-[16px] sm:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[27px] text-center text-global-6 mt-3 sm:mt-4 md:mt-[18px] max-w-[600px]">
                At MyProBuddy, we turn visionary founders into investable ventures through expert guidance and strategic support. We are with you every step of the way until you raise funds successfully.
              </p>
            </div>

            {/* Funding Types */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-[20px] justify-center items-center w-full sm:w-auto">
              {fundingTypes.map((type, index) => (
                <div key={index} className="flex gap-2 sm:gap-[10px] justify-center items-center w-auto">
                  <img 
                    src={type.icon} 
                    alt={`${type.label} icon`}
                    className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] rounded-[11px] sm:rounded-[14px]"
                  />
                  <span className="text-[15px] sm:text-[17px] font-urbanist font-medium leading-[18px] sm:leading-[21px] text-global-1">
                    {type.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="w-full mt-[86px] sm:mt-[130px] md:mt-[150px] lg:mt-[172px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1232px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-8 lg:gap-0">
              {/* Left Content */}
              <div className="flex flex-col justify-start items-start w-full lg:w-1/2">
                <h2 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6 text-left" style={{ letterSpacing: '-2px' }} >
                  <span className="text-global-4" style={{ color: '#5d248f' }}>What Sets Us</span>
                  <span className="text-global-1"> </span>
                  <span className="text-[#fc5109]">Apart</span>
                </h2>
                
                <p className="text-[16px] sm:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[27px] text-left text-global-6 mt-1 sm:mt-2 md:mt-[6px] max-w-[500px]">
                  We turn startups into compelling investment opportunities through market insight, investor access, and hands-on support.
                </p>

                {/* Chip View */}
                <div className="mt-6 sm:mt-8 md:mt-[42px] w-full">
                  <ChipView items={chipItems} />
                </div>
              </div>

              {/* Right Content - Services */}
              <div className="flex flex-col gap-8 sm:gap-10 md:gap-[52px] w-full lg:w-1/2 lg:self-center lg:mt-[6px]">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col gap-3 sm:gap-4 md:gap-[16px] justify-start items-center w-full">
                    <div className="flex justify-start items-center w-full">
                      <img 
                        src={service.icon} 
                        alt={`${service.title} icon`}
                        className="w-[38px] sm:w-[42px] md:w-[46px] h-[38px] sm:h-[42px] md:h-[46px] rounded-[18px] sm:rounded-[20px] md:rounded-[22px]"
                      />
                      <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-poppins font-medium leading-[24px] sm:leading-[26px] md:leading-[28px] text-left text-global-1 ml-3 sm:ml-4 md:ml-[16px] flex-1">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[16px] sm:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[27px] text-left text-global-6 w-full">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="w-full mt-[85px] sm:mt-[125px] md:mt-[150px] lg:mt-[170px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-start items-center w-full max-w-[1056px]">
              {/* Section Header */}
              <div className="flex flex-col justify-start items-center w-full max-w-[612px] mx-auto">
                <h2 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6  text-center" style={{ letterSpacing: '-2px' }}>
                  <span className="text-global-4"  style={{ color: '#5d248f' }}>Our Impact at a </span>
                  <span className="text-[#fc5109]">Glance</span>
                </h2>
                <p className="text-[16px] sm:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[27px] text-center text-global-6 mt-[-5px] sm:mt-[-8px] md:mt-[-10px]">
                  We fuel startup growth with expert leadership and strategic support,
                </p>
              </div>
              
              <p className="text-[16px] sm:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[27px] text-center text-global-6">
                driving success through experience and innovation.
              </p>

              {/* Stats Grid */}
              <div className="w-full bg-white border border-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-4 sm:p-5 md:p-[20px] mt-4 sm:mt-6 md:mt-[20px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-[20px] w-full">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="relative w-full">
                      <img 
                        src={stat.image} 
                        alt={`${stat.label} background`}
                        className="w-full h-[140px] sm:h-[160px] md:h-[176px] object-cover rounded-[16px] sm:rounded-[18px] md:rounded-[20px]"
                      />
                      <div className="absolute inset-0 flex flex-col gap-1 sm:gap-[6px] justify-center items-center w-full px-4 sm:px-6 md:px-[42px]">
                        <div className="flex justify-center items-center w-auto gap-1 sm:gap-2">
                          <span className="text-[39px] sm:text-[44px] md:text-[49px] font-inter font-medium leading-[48px] sm:leading-[54px] md:leading-[60px] text-global-2">
                            {stat.number}
                          </span>
                          {stat.suffix && (
                            <span className="text-[23px] sm:text-[26px] md:text-[29px] font-inter font-medium leading-[28px] sm:leading-[32px] md:leading-[36px] text-center text-global-2">
                              {stat.suffix}
                            </span>
                          )}
                          <span className="text-[40px] sm:text-[45px] md:text-[50px] font-inter font-medium leading-[49px] sm:leading-[55px] md:leading-[61px] text-center text-global-2">
                            {stat.plus}
                          </span>
                        </div>
                        <span className="text-[16px] sm:text-[17px] md:text-[18px] font-poppins font-medium leading-[22px] sm:leading-[25px] md:leading-[27px] text-center text-global-3">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full bg-global-2 mt-[85px] sm:mt-[125px] md:mt-[150px] lg:mt-[170px] py-[60px] sm:py-[70px] md:py-[82px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-[56px] justify-start items-center w-full">
            {/* Section Header */}
            <div className="flex flex-col justify-center items-center w-full max-w-[1232px]">
              <h2  className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-poppins font-medium leading-[38px] sm:leading-[57px] md:leading-[68px] lg:leading-[74px] mb-6" 
  style={{ letterSpacing: '-2px' }}>
                <span className="text-global-5" style={{ color: '#5d248f' }}>Fueling Startup Success with</span>
                <span className="text-global-1"> </span>
                <span className="text-[#fc5109]">Purpose</span>
              </h2>
              <p className="text-[16px] sm:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[27px] text-center text-global-7 mt-1 sm:mt-2 md:mt-[6px]">
                At MyProBuddy, we empower founders to become investment-ready
              </p>
              <p className="text-[16px] sm:text-[18px] font-poppins font-normal leading-[24px] sm:leading-[27px] text-center text-global-7">
                through mentorship, strategy, and investor access.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-[32px] justify-center items-start w-full max-w-[1232px] mb-6 sm:mb-8 md:mb-[36px]">
              {/* Vision Card */}
              <div className="flex justify-start items-center w-full bg-global-5 rounded-[24px] sm:rounded-[28px] md:rounded-[30px] shadow-[0px_5px_20px_#00000011]">
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-[22px] justify-center items-start w-full border border-[#f3f3f1] rounded-[22px] sm:rounded-[26px] md:rounded-[28px] bg-[linear-gradient(180deg,#ffffff_0%,_#f6f4f2_100%)] p-6 sm:p-8 md:p-[34px_38px]">
                  <img 
                    src="/images/img_image_text_image.png" 
                    alt="Vision icon"
                    className="w-[48px] sm:w-[54px] md:w-[60px] h-[48px] sm:h-[54px] md:h-[60px] rounded-[24px] sm:rounded-[27px] md:rounded-[30px]"
                  />
                  <div className="flex flex-col gap-2 sm:gap-[10px] justify-start items-start w-full">
                    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-urbanist font-semibold leading-[24px] sm:leading-[27px] md:leading-[29px] text-left text-global-1">
                      Our Vision
                    </h3>
                    <p className="text-[16px] sm:text-[18px] font-inter font-normal leading-[24px] sm:leading-[27px] text-left text-global-6">
                      To democratize access to startup funding across India by making every founder truly investment-ready.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="flex justify-start items-center w-full bg-global-4 rounded-[24px] sm:rounded-[28px] md:rounded-[30px] shadow-[0px_5px_20px_#00000011] lg:self-center">
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-[20px] justify-center items-start w-full border border-[#f3f3f1] rounded-[22px] sm:rounded-[26px] md:rounded-[28px] bg-[linear-gradient(180deg,#ffffff_0%,_#f6f4f2_100%)] p-6 sm:p-8 md:p-[34px_38px]">
                  <img 
                    src="/images/img_image_text_image.png" 
                    alt="Mission icon"
                    className="w-[48px] sm:w-[54px] md:w-[60px] h-[48px] sm:h-[54px] md:h-[60px] rounded-[24px] sm:rounded-[27px] md:rounded-[30px]"
                  />
                  <div className="flex flex-col gap-2 sm:gap-[10px] justify-start items-start w-full">
                    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-urbanist font-semibold leading-[24px] sm:leading-[27px] md:leading-[29px] text-left text-global-1">
                      Our Mission
                    </h3>
                    <p className="text-[16px] sm:text-[18px] font-inter font-normal leading-[24px] sm:leading-[27px] text-left text-global-6">
                      To support entrepreneurs with mentorship, strategic guidance, and investor connections that lead to successful fundraises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mt-[45px] sm:mt-[65px] md:mt-[80px] lg:mt-[90px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="flex justify-center items-center w-full max-w-[1232px] mx-auto">
            <div
              className="flex flex-col gap-6 sm:gap-8 md:gap-[38px] justify-center items-center w-full rounded-[18px] sm:rounded-[20px] md:rounded-[22px] py-[60px] sm:py-[70px] md:py-[80px]"
              style={{ background: '#5d248f' }}
            >
              {/* CTA Content */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-[18px] justify-start items-center w-full px-4 sm:px-6 lg:px-[56px]">
                <div className="flex flex-col justify-start items-center w-full max-w-[700px]">
                  <h2 className="text-[28px] sm:text-[35px] md:text-[38px] lg:text-[41px] font-poppins font-medium leading-[34px] sm:leading-[42px] md:leading-[46px] lg:leading-[49px] text-center" style={{ color: '#fff', letterSpacing: '-2px' }}>
                    we do not just believe in your <span className="text-[#ef3e25]">vision</span>
                  </h2>
                  <h2 className="text-[28px] sm:text-[35px] md:text-[38px] lg:text-[41px] font-poppins font-medium leading-[34px] sm:leading-[42px] md:leading-[46px] lg:leading-[49px] text-center" style={{ color: '#fff', letterSpacing: '-2px' }}>
                    <span>we help you prove it to the </span>
                    <span className="text-[#ef3e25]">world</span>
                  </h2>
                </div>
                <p className="text-[16px] sm:text-[18px] font-manrope font-normal leading-[22px] sm:leading-[25px] text-center" style={{ color: '#fff' }}>
                  Let us raise funds like a pro.
                </p>
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="medium"
                rightIcon={{
                  src: "/images/img_primary.svg",
                  width: 22,
                  height: 24
                }}
                className="gap-2 rounded-[12px] px-[26px] sm:px-[36px] md:px-[48px] py-3 md:py-[12px] text-[14px] sm:text-[15px] md:text-[16px] font-poppins font-medium leading-[20px] sm:leading-[22px] md:leading-[24px]"
                style={{ color: '#fff', background: '#ef3e25' }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
<br />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
