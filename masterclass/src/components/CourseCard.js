const CourseCard = () => {
    const courses = [
        {
            title: 'PYTHON PARA INGENIEROS',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '00/00/0000',
            imageSrc: '/images/image-course.jpg',
        },
        {
            title: 'PYTHON PARA INGENIEROS',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '00/00/0000',
            imageSrc: '/images/image-course.jpg',
        },
        {
        title: 'PYTHON PARA INGENIEROS',
        description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
        date: '00/00/0000',
        imageSrc: '/images/image-course.jpg',
        }
    ]
    
    return (
     <div className="w-full h-screen bg-gray-900 text-white " style={{ backgroundImage: 'url("/images/background-coursecard.jpg")' }}>
        <div className="max-w-w7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
           <div className="w-full md:w-4/5">
                <header className="py-12">
                    <h1 className="md:text-5xl lg:text-6xl font-poppins font-bold leading-tight ">Aprende a tu ritmo <br/>Profundiza tus habilidades</h1>
                </header>

                <main className="py-19">
                        <div className="grid gap-8 md:grid-cols-3">
                            {courses.map((course, index) => (
                            <div key={index} className="bg-white text-gray-900  rounded-lg shadow">
                                <img
                                src={course.imageSrc}
                                alt={course.title}
                                className="rounded-t-lg mb-2"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold font-poppins mb-2 ">{course.title}</h3>
                                    <p className="text-sm mb-6 font-poppins text-justify">
                                    {course.description}
                                    </p>
                                    <p className="text-sm mb-14"><strong>Próxima fecha de inicio: {course.date} </strong> </p>
                                  <div className="flex justify-center">
                                    <button className="bg-colorsButton text-colorTextNavbar text-sm font-poppins font-semibold px-20 py-3 rounded-3xl mx-auto">
                                    MÁS INFORMACIÓN AQUÍ
                                    </button>
                                 </div>
                                </div>
                            </div>
                            ))}
                        </div>
                </main>
            </div> 
        </div>
    </div>
    )
}

export default CourseCard;