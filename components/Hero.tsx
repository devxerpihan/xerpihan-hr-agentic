import React from 'react'
import { ArrowRight, Users, Globe } from 'lucide-react'
import FlowchartAnimation from './FlowchartAnimation'

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                <Globe className="w-4 h-4 mr-2" />
                Always Legally Compliant
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Right HR,<span className="text-primary-600 block">At the Right Time</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                A single, strategic framework that evolves with your company. From founder to 50+ employees, Hairpin AI provides exactly what you need when you need it.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center group">
                Start Your HR Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-gray-600">For Global Startups</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-gray-600">Phased Growth Model</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Animation */}
          <div className="relative h-full">
            <FlowchartAnimation />
          </div>
        </div>
      </div>
    </section>
  )
} 