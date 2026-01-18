import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Partners.css'

const partners = [
  {
    id: 1,
    name: 'Global Research Institute',
    logo: '🏛️',
    project: 'Educational Policy Analysis',
    description: 'Comprehensive research on educational policy frameworks and their impact on student outcomes across multiple regions.',
    impact: 'Informed policy decisions affecting 50,000+ students',
  },
  {
    id: 2,
    name: 'Sustainable Development Foundation',
    logo: '🌍',
    project: 'Climate Impact Assessment',
    description: 'Multi-year study analyzing climate change impacts and developing sustainable adaptation strategies.',
    impact: 'Guided $2M+ in sustainable development investments',
  },
  {
    id: 3,
    name: 'Tech Innovation Hub',
    logo: '💻',
    project: 'Market Research & Strategy',
    description: 'In-depth market analysis and strategic planning for emerging technology sectors.',
    impact: 'Enabled 15+ startups to secure funding',
  },
  {
    id: 4,
    name: 'Healthcare Policy Center',
    logo: '🏥',
    project: 'Healthcare Data Analysis',
    description: 'Large-scale data collection and analysis of healthcare outcomes and policy effectiveness.',
    impact: 'Improved healthcare access for 100,000+ individuals',
  },
  {
    id: 5,
    name: 'International NGO Network',
    logo: '🤝',
    project: 'Development Impact Study',
    description: 'Comprehensive evaluation of development programs and their long-term social and economic impacts.',
    impact: 'Optimized program delivery across 20+ countries',
  },
]

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null)

  const openModal = (partner) => {
    setSelectedPartner(partner)
  }

  const closeModal = () => {
    setSelectedPartner(null)
  }

  return (
    <section className="partners section">
      <div className="container">
        <motion.div
          className="partners-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Partners & Clients</h2>
          <p className="section-subtitle">
            Trusted by leading organizations worldwide
          </p>
        </motion.div>

        <div className="partners-marquee-wrapper">
          <motion.div
            className="partners-marquee-track"
          >
            {/* First Set */}
            {partners.map((partner) => (
              <motion.div
                key={`original-${partner.id}`}
                className="partner-card"
                whileHover={{ scale: 1.05, borderColor: "var(--color-professional-blue)" }}
                onClick={() => openModal(partner)}
              >
                <div className="partner-logo">{partner.logo}</div>
                <h3 className="partner-name">{partner.name}</h3>
              </motion.div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {partners.map((partner) => (
              <motion.div
                key={`duplicate-${partner.id}`}
                className="partner-card"
                whileHover={{ scale: 1.05, borderColor: "var(--color-professional-blue)" }}
                onClick={() => openModal(partner)}
              >
                <div className="partner-logo">{partner.logo}</div>
                <h3 className="partner-name">{partner.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Centered Modal */}
        <AnimatePresence>
          {selectedPartner && (
            <>
              <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              />
              <div className="modal-container">
                <motion.div
                  className="modal"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                  <button className="modal-close" onClick={closeModal}>
                    ×
                  </button>
                  <div className="modal-content">
                    <div className="modal-logo">{selectedPartner.logo}</div>
                    <h3 className="modal-title">{selectedPartner.name}</h3>
                    <h4 className="modal-project">{selectedPartner.project}</h4>
                    <p className="modal-description">
                      {selectedPartner.description}
                    </p>
                    <div className="modal-impact">
                      <strong>Impact:</strong> {selectedPartner.impact}
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Partners
