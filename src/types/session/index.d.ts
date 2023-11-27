declare namespace Entities {
    
  export interface IMessage extends Creatable {
      text: string;
      user: boolean;
      timestamp?: Date;
  }

  export interface ISession extends Creatable {
    _id: mongoose.Schema.Types.ObjectId
    userId: string;
    conversation: IMessage[];
    }
  }
  
