import { FaStar } from "react-icons/fa";

export function generateStar(rate: number, style: string, size: number) {
  return Array.from({ length: rate }, (_, index) => (
    <FaStar className={style} key={index} size={size} />
  ));
}
