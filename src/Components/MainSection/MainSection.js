import React, { useEffect } from "react";
import "./MainSection.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import waveHands from "../../img/waving-hand.png";
import dot from "../../img/record.png";
import chat from "../../img/chat.png";
const MainSection = () => {
	useEffect(() => {
		AOS.init();
	});
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className=" header">
						<div className="animate__animated animate__fadeInTopLeft">
							<div className="">
								<h2
									className="heading1 "
									data-aos="fade-zoom-in"
									data-aos-delay="300"
								>
									<span className="mt-5">IRIS</span>{" "}
								</h2>
								<div>
									<h3
										className="heading2"
										data-aos="fade-zoom-in"
										data-aos-delay="400"
									>
										Hello
									</h3>
									<img className="waveHand" src={waveHands} alt="" />
								</div>
								<p
									className="text"
									data-aos="fade-zoom-in"
									data-aos-delay="500"
								>
									I am Iris, a Virtual Assistant <br /> How may I help you?
								</p>
							</div>
						</div>
					</div>
					{/* body  */}
					<div className="main-body shadow-lg ">
						<div className=" container body body-lg p-5">
							<div className="robot-body animate__animated animate__rotateInDownLeft ">
								<i class="fas fa-robot fa-2x robot-icon"></i>
							</div>
							<div className="faq-title ">
								<p className="mt-3">
									Frequently Asked Questions <span>?</span>
								</p>
							</div>
							<div className="faq-qus mb-4 p-2 animate__animated animate__fadeInLeft">
								<p className="faq-text p-2 align-baseline ">
									<img className="dot me-1 " src={dot} alt="" /> Can I redeem my
									FB before the original term?
								</p>
							</div>
							<div className="faq-qus mb-4 p-2 animate__animated animate__fadeInRight">
								<p className="faq-text p-2">
									<img className="dot me-1" src={dot} alt="" /> Can I How do I
									pay my Credit card bill?
								</p>
							</div>
							<div className="faq-qus mb-4 p-2 animate__animated animate__fadeInLeft">
								<p className="faq-text p-2">
									<img className="dot me-1" src={dot} alt="" /> Can I How can I
									get my Account Statement?
								</p>
							</div>
							<div className="faq-qus mb-4 p-2 animate__animated animate__fadeInRight">
								<p className="faq-text p-2">
									<img className="dot me-1" src={dot} alt="" /> Can I What is
									the tenure of Fixed Deposit?
								</p>
							</div>
							<div className="faq-chat p-3  animate__animated animate__lightSpeedInLeft">
								<p className="faq-text text-center ">
									<img className="chat" src={chat} alt="" /> Can I Start a New
									Conversation
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*  */}
		</div>
	);
};

export default MainSection;
