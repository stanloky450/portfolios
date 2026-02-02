"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center px-4 pt-20"
		>
			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
				<div className="text-center lg:text-left">
					<div className="mb-6">
						<h1 className="text-5xl lg:text-7xl font-bold mb-4">
							<span className="gradient-text-primary animate-gradient">
								Hello, I'm
							</span>
							<br />
							<span className="text-neutral-900 dark:text-white">
								Stanley Iyetor
							</span>
						</h1>
						<p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 mb-8">
							Full Stack MERN Developer | Mobile App Developer | Python
							Programmer | Cybersecurity Enthusiast
						</p>
						<p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl">
							I create beautiful, functional, and user-centered digital
							experiences. Passionate about clean code, innovative design, and
							solving complex problems.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
						<Button
							size="lg"
							className="gradient-bg-primary hover:opacity-90 transition-opacity text-white font-semibold"
						>
							View My Work
						</Button>
						<Button variant="outline" size="lg">
							<a
								href="/assets/resume.pdf"
								download
								className="bg-white hover:text-white border-solid border-2 border-blue-600  text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition"
							>
								Download Resume
							</a>
						</Button>
					</div>

					<div className="flex gap-6 justify-center lg:justify-start">
						<a
							href=" https://github.com/stanloky450"
							className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							<Github className="h-6 w-6" />
						</a>
						<a
							href="https://linkedin.com/in/stanley-iyetor-9b681861"
							className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							<Linkedin className="h-6 w-6" />
						</a>
						<a
							href="stanleydiamond90@gmail.com"
							className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							<Mail className="h-6 w-6" />
						</a>
					</div>
				</div>

				<div className="flex justify-center lg:justify-end">
					<div className="relative">
						<div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full gradient-bg-primary p-1 animate-pulse-glow">
							<div className="w-full h-full rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center">
								<Image
									src="/assets/HeadShot1.jpg"
									alt="Profile"
									width={300}
									height={300}
									className="rounded-full object-cover"
								/>
							</div>
						</div>
						<div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-float"></div>
						<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<ArrowDown className="h-6 w-6 text-slate-400" />
			</div>
		</section>
	);
}
