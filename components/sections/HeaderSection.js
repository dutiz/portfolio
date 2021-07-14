import Button from '../Button'

export default function HeaderSection() {
  return (
    <div
      style={{
        background: `url('/images/head-bg.png') no-repeat center center / cover`,
        height: '750px',
      }}
      className="flex items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-5 offset-1">
            <p className="text-gray-200 uppercase">Front end Developer</p>
            <h1 className="mt-5 text-5xl font-bold text-white">
              Hi , I m <span className="text-red-500">Duti</span>
              <br /> Welcome to My World.
            </h1>
            <Button
              className="mt-5 text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
              href="#contact"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
