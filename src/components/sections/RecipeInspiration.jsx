import React from 'react';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { recipes } from '../../data/homeData';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';

export default function RecipeInspiration() {
  // Show only the featured recipe on the Home page preview
  const featured = recipes.find((r) => r.featured) || recipes[0];

  return (
    <section className="w-full py-16" id="recipe-inspiration" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">Recipe Inspiration</h2>
            <p className="font-sans text-[13px] text-[#5C534E] mt-2">
              Transform your everyday meals with a touch of premium hing.
            </p>
          </div>

          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 border border-[#C8922A] text-[#C8922A] text-[11px] font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#C8922A] hover:text-white transition-all shrink-0"
          >
            Explore Recipes <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured recipe preview card */}
        <div className="max-w-3xl mx-auto bg-white border border-[#D4A64A]/25 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
          <div className="md:w-1/2 aspect-video md:aspect-auto">
            <img 
              src={featured.image} 
              alt={featured.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center text-left">
            <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#C8922A] bg-[#C8922A]/10 px-2.5 py-1 mb-3 self-start">
              Featured Recipe Preview
            </span>
            <h3 className="font-serif text-[18px] font-bold text-[#2D0B0C] leading-snug mb-2">
              {featured.title}
            </h3>
            <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mb-4">
              {featured.desc}
            </p>
            <div className="flex gap-4 text-[#9E9087] text-[11px]">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.time}</span>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Serves {featured.serves}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
