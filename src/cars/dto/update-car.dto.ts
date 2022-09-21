import { IsString, MinLength, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto {

   @IsString()
   @IsUUID()
   @IsOptional()
   readonly id?: string;

   @IsOptional()
   @IsString({message: 'the brand is incorrect.'})   
   readonly brand?:string;

   @IsOptional()
   @IsString() 
   //@MinLength(3,{message:'the model is incorrect.'})
   readonly model?:string;
}