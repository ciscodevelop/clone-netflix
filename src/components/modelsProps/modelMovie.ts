export interface movieItemProps {
    _id?: string;
    createdAt?: Date;
    desc?: string;
    genre?: string;
    img?: string;
    imgTitle?: string;
    isSeries?: boolean;
    limit?: number;
    title?: string;
    trailer?: string;
    updatedAt?: string;
    video?: string;
    yeard?: string;
}
export interface movieProps {
    movie?:movieItemProps
   
  }