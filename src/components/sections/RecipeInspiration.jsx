import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { recipes } from '../../data/homeData';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';

export default function RecipeInspiration() {
  const featured = recipes.find((r) => r.featured);
  const supporting = recipes.filter((r) => !r.featured);

  return (
    <section className="w-full py-14" id="recipe-inspiration" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">Cook with Prabhukul</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">Recipe Inspiration</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured recipe */}
          {featured && (
            <div className="group relative overflow-hidden border border-[#D4A64A]/25 hover:border-[#D4A64A]/60 transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#C8922A] bg-[#C8922A]/10 px-2 py-0.5 mb-2">Featured Recipe</span>
                <h3 className="font-serif text-xl font-bold text-[#2D0B0C] mb-2 leading-tight">{featured.title}</h3>
                <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mb-4">{featured.desc}</p>
                <div className="flex items-center gap-4 text-[11px] text-[#9E9087] mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.time}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />Serves {featured.serves}</span>
                </div>
                <Link to={featured.link} className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#2D0B0C] border-b border-[#D4A64A] pb-0.5 hover:text-[#C8922A] hover:border-[#C8922A] transition-colors">
                  View Recipe <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Supporting recipes */}
          <div className="flex flex-col gap-4">
            {supporting.map((recipe) => (
              <div key={recipe.id} className="group flex gap-4 border border-[#D4A64A]/25 hover:border-[#D4A64A]/60 transition-all p-3">
                <div className="w-24 h-24 shrink-0 overflow-hidden">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-serif text-[14px] font-bold text-[#2D0B0C] leading-tight mb-1">{recipe.title}</h3>
                    <p className="font-sans text-[11px] text-[#5C534E] leading-relaxed line-clamp-2">{recipe.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] text-[#9E9087] flex items-center gap-1"><Clock className="w-3 h-3" />{recipe.time}</span>
                    <Link to={recipe.link} className="text-[10px] font-semibold uppercase tracking-wider text-[#C8922A] hover:text-[#2D0B0C] transition-colors">
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

