import { int } from "aws-sdk/clients/datapipeline";
import { IsNotEmpty, MaxLength, Validate, IsEmail } from "class-validator";
import { Constants } from "../../config/constants";
import { Model } from "../../model";

export class BookingRequestModel extends Model {

    @IsNotEmpty()
    public fromAddress: string;
    
    @IsNotEmpty()
    public fromLatitude: string;

    @IsNotEmpty()
    public fromLongitude: string;

    @IsNotEmpty()
    public toAddress: string;

    @IsNotEmpty()
    public toLatitude: string;

    @IsNotEmpty()
    public toLongitude: string;

    constructor(body: any) {
        super();
        const {
            fromAddress,
            fromLatitude,
            fromLongitude,
            toAddress,
            toLatitude,
            toLongitude
        } = body;

        this.fromAddress = fromAddress;
        this.fromLatitude = fromLatitude;
        this.fromLongitude = fromLongitude;
        this.toAddress = toAddress;
        this.toLatitude = toLatitude;
        this.toLongitude = toLongitude;
    }
}

export class AddCabModel extends Model {

    @IsNotEmpty()
    public name: string;
    
    @IsNotEmpty()
    public number: string;

    @IsNotEmpty()
    public latitude: string;

    @IsNotEmpty()
    public longitude: string;

    constructor(body: any) {
        super();
        const {
            name,
            number,
            latitude,
            longitude
        } = body;

        this.name = name;
        this.number = number;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}


export class listOfCabNearByModel extends Model {

    @IsNotEmpty()
    public latitude: string;

    @IsNotEmpty()
    public longitude: string;

    constructor(body: any) {
        super();
        const {
            latitude,
            longitude
        } = body;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
