import { Router } from "express";
import { Validator } from "../../validate";
import { UsersController } from "./usersController";
import { AddCabModel, BookingRequestModel, listOfCabNearByModel } from "./usersModel";
import { UsersMiddleware } from "./usersMiddleware";

const router: Router = Router();
const v: Validator = new Validator();
const usersController = new UsersController();
const usersMiddleware = new UsersMiddleware();

// Booking Request 
const bookingRequest = [v.validate(BookingRequestModel), usersController.bookingRequest];
router.post("/booking-request", bookingRequest);

// View Past Booking
const listBooking = [usersController.listBooking];
router.get("/list-booking", listBooking);

// Add Cab 
const addCab = [v.validate(AddCabModel), usersController.addCab];
router.post("/add-cab", addCab);

// Near By Cab
const listOfCabNearBy = [v.validate(listOfCabNearByModel), usersController.listOfCabNearBy];
router.post("/list-cab-near-by", listOfCabNearBy);

export const UserRoute: Router = router;
