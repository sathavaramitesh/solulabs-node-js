import { Request, Response } from "express";
import { ResponseBuilder } from "../../helpers/responseBuilder";
import { UsersUtils } from "./usersUtils";
import { async } from "q";
import * as moment from "moment";
import * as _ from "lodash";
import { Jwt } from "../../helpers/jwt";
import { AuthUtils } from "../auth/authUtils"

export class UsersController {
    private usersUtils: UsersUtils = new UsersUtils();
    private authUtils: AuthUtils = new AuthUtils();


    public bookingRequest = async (req: Request, res: Response) => {
        const { id } = req._user;
        const { fromAddress, fromLatitude, fromLongitude, toAddress, toLatitude, toLongitude } = req.body;
        const result = await this.usersUtils.bookingRequest({
            fromAddress: fromAddress,
            fromLatitude: fromLatitude,
            fromLongitude: fromLongitude,
            toAddress: toAddress,
            toLatitude: toLatitude,
            toLongitude: toLongitude,
            userId: id
        });
        const response = ResponseBuilder.successMessage(req.t("CAB_BOOKING_SUCCESSFULLY"));
        res.status(response.code).json(response);
    }


    public listBooking = async (req: Request, res: Response) => {
        const { id } = req._user;
        const result = await this.usersUtils.listBooking(id);
        const response = ResponseBuilder.data(result);
        res.status(response.code).json(response);
    }

    public addCab = async (req: Request, res: Response) => {
        await this.usersUtils.addCab(req.body);
        const response = ResponseBuilder.successMessage(req.t("CAB_ADDED_SUCCESSFULLY"));
        res.status(response.code).json(response);
    }

    public listOfCabNearBy = async (req: Request, res: Response) => {
        const { latitude, longitude } = req.body;
        const result = await this.usersUtils.listOfCabNearBy(latitude, longitude);
        const response = ResponseBuilder.data(result);
        res.status(response.code).json(response);
    }

}
