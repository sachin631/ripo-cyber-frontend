import { Card } from "antd"
import Meta from "antd/es/card/Meta"

const OurServices: React.FC = () => {
    const data: any = [{ images: "/it_service.png", title: "MANAGED IT SERVICE", discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium, numquam atque alias consequuntur iusto est et voluptatum quasi ullam vitae dolorum nisi, illum quo facilis deserunt nobis eius libero?" }, { images: "/it_service.png", title: "IT SECURITY", discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium, numquam atque alias consequuntur iusto est et voluptatum quasi ullam vitae dolorum nisi, illum quo facilis deserunt nobis eius libero?" }, { images: "/it_service.png", title: "IT CONSULTING", discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium, numquam atque alias consequuntur iusto est et voluptatum quasi ullam vitae dolorum nisi, illum quo facilis deserunt nobis eius libero?" }]
    return (
        <>
            <section className="text-white mt-10 px-10 py-10">
                <h1 className="text-center text-4xl p-4">OUR SERVICES</h1>
                <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-evenly md:mt-4">
                    {
                        data?.map((curelem: any,index:number) => (
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                key={index}
                                cover={<img alt="example" src={curelem.images} />}
                            >
                                <Meta title={curelem.title} description={curelem.discription} />
                            </Card>
                        ))

                    }
                </div>
            </section>
        </>
    )
}

export default OurServices