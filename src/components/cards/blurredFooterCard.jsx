
import {Card, CardBody, Image, CardHeader} from "@heroui/react";

const BlurredFooterCard = ({contactName , contactImage , contactEmail , contactPhone})=>{



    return(
        <Card className="p-2">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{contactName}</p>
                <small className="text-default-500">{contactEmail}</small>
                <h4 className="font-bold text-large">{contactPhone}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={contactImage}
                    width={270}
                />
            </CardBody>
        </Card>
    )
};

export default BlurredFooterCard;