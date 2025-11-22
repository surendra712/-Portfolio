import React from 'react';
import Navbar from './components/Navbar';
import AgentWidget from './components/AgentWidget';
import ProjectCard from './components/ProjectCard';
import { PROFILE, EDUCATION, SKILLS, PROJECTS, CERTIFICATIONS } from './constants';
import { Mail, ChevronRight, Award, Send } from 'lucide-react';

const App: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Decorative Blobs - Brighter & Larger */}
          <div className="absolute top-10 -left-32 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-10 -right-32 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-5xl mx-auto text-center md:text-left z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary-200 bg-white/50 backdrop-blur-sm text-primary-700 text-sm font-bold mb-8 animate-fade-in shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              Available for Hire
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 animate-gradient-x">
                Intelligent Future
              </span>
            </h1>
            
            <p className="text-slate-600 text-lg sm:text-2xl mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
              {PROFILE.tagline} I specialize in 
              <span className="font-bold text-slate-900 decoration-primary-400 underline decoration-2 underline-offset-2 mx-1">Full-Stack Development</span> and 
              <span className="font-bold text-slate-900 decoration-secondary-400 underline decoration-2 underline-offset-2 mx-1">Agentic AI</span>.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-primary-600 transition-all duration-300 shadow-xl hover:shadow-primary-500/40 hover:-translate-y-1 flex items-center gap-2"
              >
                View My Work 
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-primary-500 hover:text-primary-600 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl flex items-center gap-2"
              >
                Contact Me <Mail size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Card Wrapper with Hover Effect */}
            <div className="group relative rounded-3xl p-1 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-[2px]"></div>
              
              <div className="bg-white rounded-[1.4rem] p-8 md:p-14 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden z-10">
                
                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                  <div className="relative order-2 md:order-1">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl max-w-md mx-auto md:mr-auto transform group-hover:scale-[1.02] transition-transform duration-500 ring-8 ring-slate-50">
                      <img 
                        src="https://picsum.photos/600/800?grayscale" 
                        alt={PROFILE.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent mix-blend-overlay"></div>
                    </div>
                    {/* Experience Card */}
                    <div className="absolute -bottom-8 -right-4 md:right-auto md:-left-8 bg-white p-6 rounded-2xl shadow-2xl shadow-primary-900/10 border border-slate-50 max-w-[220px] hidden sm:block animate-float">
                      <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-1">4+</p>
                      <p className="text-xs text-slate-500 font-extrabold uppercase tracking-widest">Years of Innovation</p>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <div className="inline-block px-3 py-1 mb-4 bg-primary-50 text-primary-600 rounded-lg font-bold text-sm uppercase tracking-wider">Who I Am</div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">About Me</h2>
                    <p className="text-slate-600 leading-loose mb-10 text-lg font-medium">
                      {PROFILE.about}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 p-6 rounded-2xl hover:bg-primary-50/50 transition-colors border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                          <span className="w-3 h-3 rounded-full bg-primary-500 shadow-lg shadow-primary-500/50"></span> Education
                        </h4>
                        {EDUCATION.map((edu, idx) => (
                          <div key={idx}>
                            <p className="text-slate-800 font-bold text-base">{edu.degree} - {edu.specialization}</p>
                            <p className="text-slate-500 text-sm mb-2 font-medium">{edu.institution}</p>
                            <p className="text-white text-xs font-bold bg-primary-500 inline-block px-3 py-1 rounded-full shadow-sm">{edu.duration}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl hover:bg-secondary-50/50 transition-colors border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                           <span className="w-3 h-3 rounded-full bg-secondary-500 shadow-lg shadow-secondary-500/50"></span> Focus Areas
                        </h4>
                        <ul className="text-slate-600 space-y-3 text-sm font-semibold">
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-secondary-400 rounded-full"></div> Agentic AI Architecture</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-secondary-400 rounded-full"></div> Full Stack Web Apps</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-secondary-400 rounded-full"></div> ML Model Deployment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Technical Arsenal</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                Mastering the tools that power the next generation of software.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SKILLS.map((category, idx) => (
                // Card Wrapper for Hover Effect
                <div key={idx} className="group relative rounded-2xl p-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]"></div>
                  
                  <div className="bg-white p-8 rounded-xl h-full border border-slate-100 group-hover:border-transparent relative z-10">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-bold border border-slate-100 group-hover:bg-primary-50 group-hover:text-primary-700 group-hover:border-primary-100 transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-28 bg-white relative overflow-hidden">
           {/* Background elements */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 to-transparent"></div>
           <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary-50/30 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <div className="inline-block px-3 py-1 mb-3 bg-secondary-50 text-secondary-600 rounded-lg font-bold text-sm uppercase tracking-wider">Portfolio</div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Featured Projects</h2>
                <p className="text-slate-600 max-w-xl text-lg font-medium">
                  A showcase of practical AI applications and complex systems.
                </p>
              </div>
              <a href={PROFILE.socials.github} className="px-8 py-3 bg-slate-100 text-slate-800 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2 shadow-sm hover:shadow-lg">
                View Github Profile <ChevronRight size={18} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
               <h2 className="text-4xl font-extrabold text-slate-900">Certifications & Credentials</h2>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="group relative rounded-2xl p-1 transition-all duration-300 hover:-translate-y-2">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]"></div>
                    
                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm h-full flex flex-col items-center text-center relative z-10">
                       <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                          <Award size={32} />
                       </div>
                       <h3 className="font-bold text-xl text-slate-900 mb-2">{cert.name}</h3>
                       <p className="text-sm text-primary-600 mb-4 font-bold uppercase tracking-wide">{cert.platform}</p>
                       <p className="text-sm text-slate-500 leading-relaxed font-medium">{cert.description}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-28 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-primary-900/30 to-transparent pointer-events-none"></div>
          
          {/* Floating glow effects */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-600/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Collaborate?</h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium">
                Whether you have a question, a job opportunity, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl relative group">
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               
               <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Thank you! This is a demo form."); }}>
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary-300 uppercase tracking-wider ml-1">Name</label>
                        <input type="text" className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-5 py-4 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 outline-none transition-all placeholder:text-slate-600 font-medium" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary-300 uppercase tracking-wider ml-1">Email</label>
                        <input type="email" className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-5 py-4 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 outline-none transition-all placeholder:text-slate-600 font-medium" placeholder="john@example.com" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="block text-sm font-bold text-primary-300 uppercase tracking-wider ml-1">Message</label>
                     <textarea rows={4} className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-5 py-4 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 outline-none transition-all placeholder:text-slate-600 font-medium" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-primary-900/50 hover:shadow-primary-500/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                     Send Message <Send size={20} />
                  </button>
               </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-12 text-center text-slate-500 text-sm border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <p className="mb-4 font-medium">&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs opacity-80 bg-slate-900/50 px-6 py-3 rounded-full border border-slate-800/50">
            <span>Built with</span>
            <span className="text-primary-400 font-bold">React</span>
            <span className="text-slate-700">•</span>
            <span className="text-secondary-400 font-bold">Tailwind</span>
            <span className="text-slate-700">•</span>
            <span className="text-accent-400 font-bold">Gemini 2.5</span>
          </div>
        </div>
      </footer>

      <AgentWidget />
    </div>
  );
};

export default App;