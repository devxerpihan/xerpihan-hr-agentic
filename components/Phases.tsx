import React from 'react'
import { Shield, Users, Building, FileText, CheckCircle, ArrowRight } from 'lucide-react'

export const Phases = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "The Survival Stage",
      subtitle: "Founder to Employee #1",
      description: "At this stage, the AI's only priority is to make the first hire legally and safely. Overwhelming the founder with anything else is malpractice.",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      frameworks: [
        "Compliant Employment Contracts: Based on local labor laws.",
        "Basic Payroll & Tax Structure: The absolute essentials to pay someone correctly."
      ],
      sop: [
        "SOP: How to Make a Formal Job Offer.",
        "SOP: Checklist for New Hire Payroll & Tax Registration."
      ],
      aiRole: "Legal Guardrail. Its job is to prevent the founder from making a critical, company-ending mistake with their first hire."
    },
    {
      phase: "Phase 2",
      title: "The Foundation Stage",
      subtitle: "Employees #2 to #10",
      description: "The company is now a small team. The focus shifts from pure survival to creating basic consistency and a good employee experience so people don't leave.",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      frameworks: [
        "A Simple Onboarding Plan: Beyond just payroll, this covers the first week's goals and introductions.",
        "A Basic Performance Check-in Process: Not a formal review, but a structure for regular 1-on-1s.",
        "A Centralized Leave Tracking System: Moving beyond email requests to a simple spreadsheet or tool."
      ],
      sop: [
        "SOP: First Day Onboarding Checklist (IT setup, team intros).",
        "SOP: How to Conduct a Monthly 1-on-1 Meeting.",
        "SOP: How to Apply for and Approve Leave."
      ],
      aiRole: "Efficiency & Retention Builder."
    },
    {
      phase: "Phase 3",
      title: "The Scaling Stage",
      subtitle: "Employees #11 to #50",
      description: "You can no longer manage by walking around. Inconsistency becomes a major risk. The AI's focus must shift to building scalable systems and defining the culture explicitly.",
      icon: Building,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      frameworks: [
        "The First Employee Handbook: Formalizing policies, values, and culture.",
        "A Standardized Performance Review Cycle: Moving to 6-monthly or annual reviews with clear criteria.",
        "Basic Career Levels: Defining the difference between a junior, mid-level, and senior role."
      ],
      sop: [
        "SOP: The Performance Review Process.",
        "SOP: How to Add or Amend a Policy in the Employee Handbook.",
        "SOP: The Promotion Process."
      ],
      aiRole: "Culture & Scale Enabler."
    }
  ];

  return (
    <section id="phases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Phased HR Maturity Model</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic framework that evolves with your company's headcount, providing exactly what you need at each stage of growth.
          </p>
        </div>
        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 lg:p-12 border-2 ${phase.borderColor} shadow-lg`}>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Phase Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${phase.bgColor} rounded-lg flex items-center justify-center`}>
                      <phase.icon className={`w-6 h-6 ${phase.color}`} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{phase.phase}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="text-lg font-semibold text-gray-700 mb-2">{phase.subtitle}</div>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">AI's Role:</div>
                    <p className="text-sm text-gray-600">{phase.aiRole}</p>
                  </div>
                </div>

                {/* Right Column - Frameworks and SOPs */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary-600" />
                      Core Frameworks to Build
                    </h4>
                    <div className="space-y-3">
                      {phase.frameworks.map((framework, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{framework}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <ArrowRight className="w-5 h-5 mr-2 text-primary-600" />
                      Essential SOPs to Generate
                    </h4>
                    <div className="space-y-3">
                      {phase.sop.map((item, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your HR Journey?</h3>
                <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                    Join forward-thinking companies worldwide and build a robust HR foundation that scales with your business.
                </p>
                <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Get Started Today
                </button>
            </div>
        </div>
      </div>
    </section>
  )
} 