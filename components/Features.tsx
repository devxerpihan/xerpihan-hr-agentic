import React from 'react'
import { Brain, Zap, Shield, Users, TrendingUp, FileText } from 'lucide-react'

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Strategic AI Partner",
      description: "Acts as your expert HR director, providing strategic guidance that evolves with your business growth.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Right HR, Right Time",
      description: "Delivers exactly what you need at each stage - no overwhelming systems, just practical solutions.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Shield,
      title: "Globally Compliant",
      description: "Built to adapt to local labor laws, ensuring legal safety from day one, wherever you are.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Phased Growth Model",
      description: "Three distinct phases that scale from founder to 50+ employees with clear frameworks and SOPs.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: TrendingUp,
      title: "Scalable Framework",
      description: "Grows with your team - no need to rebuild systems as you expand from 1 to 50+ employees.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: FileText,
      title: "Ready-to-Use SOPs",
      description: "Pre-built standard operating procedures for every HR process you'll need as you grow.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Hairpin AI is Different</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike traditional HR systems that overwhelm startups with enterprise features, Hairpin AI provides a strategic, phased approach that grows with your company.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">3</div>
                    <div className="text-gray-600 font-medium">Strategic Phases</div>
                </div>
                <div>
                    <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">50+</div>
                    <div className="text-gray-600 font-medium">Ready SOPs</div>
                </div>
                <div>
                    <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">100%</div>
                    <div className="text-gray-600 font-medium">Globally Compliant</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
} 