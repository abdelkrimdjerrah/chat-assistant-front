declare namespace Entities {
    
  export interface IPost extends Creatable {
    _id: mongoose.Schema.Types.ObjectId
    text: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
}