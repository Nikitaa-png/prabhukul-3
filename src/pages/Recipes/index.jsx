import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { recipes } from '../../data/homeData';
import { Clock, Users, ChevronDown, ChevronUp } from 'lucide-react';

const fullRecipeDetails = {
  1: {
    ingredients: [
      '1 cup yellow lentils (toor dal/moong dal)',
      '1/4 tsp turmeric powder',
      '1/2 tsp salt',
      '3 cups water',
      '2 tbsp ghee or oil',
      '1 tsp cumin seeds',
      '3 cloves garlic, finely chopped',
      '1 green chili, slit',
      'A generous pinch of Prabhukul Hing',
      '1/2 tsp red chili powder',
      'Fresh coriander leaves for garnish'
    ],
    steps: [
      'Wash the lentils and cook them in a pressure cooker or pot with 3 cups of water, turmeric powder, and salt until soft.',
      'Heat ghee or oil in a small pan for tempering (tadka).',
      'Add cumin seeds and let them splutter. Add chopped garlic and green chili, sautéing until garlic is golden.',
      'Turn off the heat, immediately add the Prabhukul hing and red chili powder, stirring briefly so the spices do not burn.',
      'Pour the hot tadka over the cooked dal. Cover immediately for 2 minutes to lock in the rich, volatile hing aroma.',
      'Garnish with fresh coriander leaves and serve hot with rice or rotis.'
    ]
  },
  2: {
    ingredients: [
      '4 medium potatoes, boiled and cubed',
      '1.5 tbsp mustard oil or ghee',
      '1 tsp cumin seeds',
      '1 tsp ginger-chili paste',
      '1/4 tsp turmeric powder',
      '1 tsp coriander powder',
      'A pinch of Prabhukul Pure Hing',
      'Salt to taste',
      'Fresh coriander leaves'
    ],
    steps: [
      'Heat oil in a pan. Add cumin seeds and let them crackle.',
      'Lower the heat, add the ginger-chili paste and a generous pinch of Prabhukul hing, sautéing for 30 seconds.',
      'Add the potato cubes and gently toss to coat in the tempering.',
      'Sprinkle turmeric powder, coriander powder, and salt. Stir gently so potatoes do not mash.',
      'Cook on medium heat for 5-7 minutes until the edges of the potatoes are crispy.',
      'Garnish with chopped coriander and serve hot.'
    ]
  },
  3: {
    ingredients: [
      '1 cup kidney beans (rajma), soaked overnight',
      '2 tbsp oil or ghee',
      '1 large onion, finely chopped',
      '1 cup tomato purée',
      '1 tbsp ginger-garlic paste',
      '1/2 tsp turmeric powder',
      '1 tsp Kashmiri red chili powder',
      '1 tsp garam masala',
      '1/4 tsp Prabhukul Compound Hing',
      'Salt to taste'
    ],
    steps: [
      'Boil the soaked rajma with salt and water until completely soft.',
      'Heat oil in a deep pan. Sauté onions until golden brown.',
      'Add ginger-garlic paste, tomato purée, and spices (turmeric, chili powder, and salt). Cook until oil starts to separate.',
      'Stir in the Prabhukul compound hing, dissolved in 1 tbsp of warm water for even distribution.',
      'Add the boiled rajma along with its cooking water. Mash a few beans to thicken the gravy.',
      'Simmer on low heat for 15-20 minutes. Stir in garam masala, garnish with fresh herbs, and serve with steamed rice.'
    ]
  },
  4: {
    ingredients: [
      '2 cups water',
      '1 cup milk',
      '2 tsp Prabhukul Diamond Tea leaves',
      '1-inch ginger, crushed',
      '2 green cardamoms, crushed',
      '2 tsp sugar or to taste'
    ],
    steps: [
      'In a saucepan, bring 2 cups of water to a boil.',
      'Add the crushed ginger and cardamoms, simmering for 2-3 minutes to extract their aromatic oils.',
      'Add the Prabhukul Diamond Tea leaves and sugar, simmering for 1-2 minutes until the water is deep red-brown.',
      'Pour in the milk and bring to a rolling boil.',
      'Lower the heat and let it simmer for another minute to build body.',
      'Strain the hot masala chai into cups and serve with biscuits.'
    ]
  }
};

export default function Recipes() {
  const [activeRecipe, setActiveRecipe] = useState(null);

  return (
    <>
      <SEO 
        title="Recipe Inspiration – Culinary Secrets with Prabhukul Hing" 
        description="Try our step-by-step recipes for Tadka Dal, Hing Aloo, and Rajma elevated with premium Hathras hing." 
      />
      <div 
        className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-4xl mx-auto bg-white/95 border border-[#D4A64A]/30 p-8 sm:p-12 shadow-xl rounded-sm space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Recipe Inspiration
            </h1>
            <p className="font-sans text-[13px] text-[#5C534E] max-w-xl mx-auto leading-relaxed">
              Discover how a tiny pinch of Prabhukul Hing or a blend of our spices can transform simple home cooking into aromatic masterpieces.
            </p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {/* Recipes List */}
          <div className="space-y-6">
            {recipes.map((recipe) => {
              const isOpen = activeRecipe === recipe.id;
              const details = fullRecipeDetails[recipe.id] || { ingredients: [], steps: [] };

              return (
                <div key={recipe.id} className="border border-[#D4A64A]/25 bg-white/70 overflow-hidden rounded-sm transition-all hover:shadow-md">
                  {/* Summary Bar */}
                  <button
                    onClick={() => setActiveRecipe(isOpen ? null : recipe.id)}
                    className="w-full flex flex-col md:flex-row items-center md:items-stretch text-left focus:outline-none"
                  >
                    <div className="w-full md:w-1/3 aspect-video md:aspect-auto shrink-0 bg-[#FAF6F0]">
                      <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="w-full md:w-2/3 p-6 flex flex-col justify-between gap-4">
                      <div>
                        <h2 className="font-serif text-xl font-bold text-[#2D0B0C] mb-2">{recipe.title}</h2>
                        <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed line-clamp-3">{recipe.desc}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#D4A64A]/10">
                        <div className="flex gap-4 text-[#9E9087] text-[11px]">
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {recipe.time}</span>
                          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Serves {recipe.serves}</span>
                        </div>
                        <span className="text-[#C8922A] flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider">
                          {isOpen ? <>Hide Details <ChevronUp className="w-4 h-4" /></> : <>View Recipe <ChevronDown className="w-4 h-4" /></>}
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Expandable Recipe Details */}
                  {isOpen && (
                    <div className="p-6 border-t border-[#D4A64A]/20 bg-[#FAF6F0]/30 grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
                      {/* Ingredients */}
                      <div className="md:col-span-2 space-y-3">
                        <h3 className="font-serif text-lg font-bold text-[#163728]">Ingredients</h3>
                        <ul className="list-disc pl-5 font-sans text-[12px] text-[#5C534E] space-y-1.5">
                          {details.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Steps */}
                      <div className="md:col-span-3 space-y-3">
                        <h3 className="font-serif text-lg font-bold text-[#163728]">Instructions</h3>
                        <ol className="list-decimal pl-5 font-sans text-[12px] text-[#5C534E] space-y-2">
                          {details.steps.map((step, i) => (
                            <li key={i} className="leading-relaxed">{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
