declare namespace Entities {
    
  export interface IMessage extends Creatable {
      text: string;
      user: boolean;
      timestamp?: Date;
  }

  export interface ISession extends Creatable {
    sessionId: mongoose.Schema.Types.ObjectId
    userId: string;
    conversation?: IMessage[];
    }
  }
  
