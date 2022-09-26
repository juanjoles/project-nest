import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

   @IsString({message: 'the brand is incorrect.'})   
   readonly brand:string;

   @IsString() 
   //@MinLength(3,{message:'the model is incorrect.'})
   readonly model:string;
   
}