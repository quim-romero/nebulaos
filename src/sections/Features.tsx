import Container from '../components/Container'

const Features = () => {
  return (
    <section
      id="features"
      className="py-28 bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300"
    >
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Built for <span className="text-primary">Performance</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
      </Container>
    </section>
  )
}

export default Features
