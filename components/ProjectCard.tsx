import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-3xl p-1 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/30 h-full">
      {/* Gradient Border Effect - Brighter and more visible on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-[3px]"></div>
      
      <div className="bg-white rounded-[1.3rem] p-6 h-full flex flex-col border border-slate-100 group-hover:border-transparent relative z-10 overflow-hidden">
        {/* Decorative background blob inside card */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-50 rounded-full transition-transform duration-500 group-hover:scale-150 group-hover:bg-primary-50/50"></div>

        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className="p-3.5 bg-primary-50 rounded-2xl text-primary-600 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg">
            <Code2 size={24} />
          </div>
          <div className="flex gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-900 rounded-full transition-all duration-300 hover:scale-110 shadow-sm" title="View Code">
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} className="p-2.5 text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 rounded-full transition-all duration-300 hover:scale-110 shadow-sm" title="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all">
          {project.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow relative z-10">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50 relative z-10">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs font-bold text-primary-700 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-full group-hover:bg-white group-hover:shadow-sm transition-all">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;