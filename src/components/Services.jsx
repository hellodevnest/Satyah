import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    title: 'Research and Analysis',
    description: 'Comprehensive research methodologies and in-depth analysis to uncover insights that drive strategic decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Data Collection and Analysis',
    description: 'Systematic data gathering and advanced analytical techniques to transform raw information into actionable intelligence.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    title: 'Consultancy Services',
    description: 'Expert guidance and strategic consulting to help organizations navigate complex challenges and opportunities.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sustainable Development Research',
    description: 'Evidence-based research focused on creating sustainable solutions for long-term environmental and social impact.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Strategic Planning',
    description: 'Data-driven strategic planning that aligns organizational goals with actionable roadmaps for success.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Monitoring & Evaluation (M&E)',
    description: 'Comprehensive monitoring and evaluation frameworks to track program effectiveness and measure long-term impact.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
]

// import MotionBackground from './MotionBackground' // Removing MotionBackground as requested to favor images

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to your research and strategic needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div
                className="service-image-bg"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="service-overlay" />
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
