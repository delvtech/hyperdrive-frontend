import { SVGProps } from "react";

interface ErrFaceProps extends SVGProps<SVGSVGElement> {
  accentClassName?: string;
}

export default function ErrFace({
  accentClassName = "fill-error",
  ...props
}: ErrFaceProps): JSX.Element {
  return (
    <svg
      width={227}
      height={185}
      viewBox="0 0 227 185"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9546 157H13C11.6441 157 10.3512 156.73 9.17212 156.241L8.02296 159.012C9.55992 159.65 11.2428 160 13 160H16.9546V157ZM3.7588 150.828L0.987627 151.977C0.350275 150.44 0 148.757 0 147V143.179H3V147C3 148.356 3.26986 149.649 3.7588 150.828ZM3 43.8214H0V40C0 38.2428 0.350275 36.5599 0.987627 35.023L3.75881 36.1721C3.26986 37.3512 3 38.6441 3 40V43.8214ZM9.17212 30.7588C10.3512 30.2699 11.6441 30 13 30H16.9545V27H13C11.2428 27 9.55992 27.3503 8.02296 27.9876L9.17212 30.7588ZM183.045 30V27H187C188.757 27 190.44 27.3503 191.977 27.9876L190.828 30.7588C189.649 30.2699 188.356 30 187 30H183.045ZM197 143.179H200V147C200 148.757 199.65 150.44 199.012 151.977L196.241 150.828C196.73 149.649 197 148.356 197 147V143.179ZM24.8637 157V160H32.7728V157H24.8637ZM167.227 157V160H175.136V157H167.227ZM183.045 157V160H187C188.757 160 190.44 159.65 191.977 159.012L190.828 156.241C189.649 156.73 188.356 157 187 157H183.045ZM197 135.536H200V127.893H197V135.536ZM197 120.25H200V112.607H197V120.25ZM197 104.964H200V97.3214H197V104.964ZM197 89.6786H200V82.0357H197V89.6786ZM197 74.3929H200V66.75H197V74.3929ZM197 59.1071H200V51.4643H197V59.1071ZM197 43.8214H200V40C200 38.2428 199.65 36.5599 199.012 35.023L196.241 36.1721C196.73 37.3512 197 38.6441 197 40V43.8214ZM175.136 30V27H167.227V30H175.136ZM159.318 30V27H151.409V30H159.318ZM143.5 30V27H135.591V30H143.5ZM127.682 30V27H119.773V30H127.682ZM111.864 30V27H103.955V30H111.864ZM96.0455 30V27H88.1364V30H96.0455ZM80.2273 30V27H72.3182V30H80.2273ZM64.4091 30V27H56.5V30H64.4091ZM48.5909 30V27H40.6818V30H48.5909ZM32.7727 30V27H24.8636V30H32.7727ZM3 51.4643H0V59.1071H3V51.4643ZM3 66.75H0V74.3929H3V66.75ZM3 82.0357H0V89.6786H3V82.0357ZM3 97.3214H0V104.964H3V97.3214ZM3 112.607H0V120.25H3V112.607ZM3 127.893H0V135.536H3V127.893Z"
      />
      <path d="M140 88C140 90.7614 137.761 93 135 93C132.239 93 130 90.7614 130 88C130 85.2386 132.239 83 135 83C137.761 83 140 85.2386 140 88Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M92 103.5C92 102.672 92.6716 102 93.5 102H106.5C107.328 102 108 102.672 108 103.5C108 104.328 107.328 105 106.5 105H93.5C92.6716 105 92 104.328 92 103.5Z"
      />
      <path d="M70 88C70 90.7614 67.7614 93 65 93C62.2386 93 60 90.7614 60 88C60 85.2386 62.2386 83 65 83C67.7614 83 70 85.2386 70 88Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={accentClassName}
        d="M202.728 23.7796C202.142 23.1938 202.142 22.2441 202.728 21.6583L216.87 7.51614C217.456 6.93035 218.406 6.93035 218.992 7.51614C219.577 8.10192 219.577 9.05167 218.992 9.63746L204.849 23.7796C204.264 24.3654 203.314 24.3654 202.728 23.7796Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={accentClassName}
        d="M195.5 20C194.672 20 194 19.3284 194 18.5V1.5C194 0.671574 194.672 -4.21468e-08 195.5 0C196.328 0 197 0.671574 197 1.5V18.5C197 19.3284 196.328 20 195.5 20Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={accentClassName}
        d="M207 29.5001C207 28.6716 207.672 28.0001 208.5 28.0001H225.5C226.328 28.0001 227 28.6716 227 29.5001C227 30.3285 226.328 31.0001 225.5 31.0001L208.5 31.0001C207.672 31.0001 207 30.3285 207 29.5001Z"
      />
      <path
        className={accentClassName}
        d="M156.585 169.866C156.753 170.05 156.846 170.29 156.846 170.539V184C156.846 184.552 156.399 185 155.846 185H149.142C148.59 185 148.142 184.552 148.142 184V172.518C148.142 172.272 148.051 172.035 147.887 171.851L144.6 168.181C144.411 167.969 144.14 167.848 143.855 167.848H131.35C130.798 167.848 130.35 168.296 130.35 168.848V184C130.35 184.552 129.903 185 129.35 185H122.646C122.094 185 121.646 184.552 121.646 184V141.2C121.646 140.648 122.094 140.2 122.646 140.2H149.325C149.592 140.2 149.848 140.307 150.036 140.496L156.301 146.82C156.486 147.007 156.59 147.26 156.59 147.524V160.27C156.59 160.533 156.487 160.785 156.302 160.972L152.903 164.421C152.53 164.8 152.519 165.404 152.877 165.797L156.585 169.866ZM130.35 159.68C130.35 160.232 130.798 160.68 131.35 160.68H145.36C145.625 160.68 145.88 160.575 146.067 160.387L147.721 158.733C147.909 158.545 148.014 158.291 148.014 158.026V150.15C148.014 149.885 147.909 149.631 147.721 149.443L146.067 147.789C145.88 147.601 145.625 147.496 145.36 147.496H131.35C130.798 147.496 130.35 147.944 130.35 148.496V159.68Z"
      />
      <path
        className={accentClassName}
        d="M115.318 169.866C115.486 170.05 115.579 170.29 115.579 170.539V184C115.579 184.552 115.131 185 114.579 185H107.875C107.323 185 106.875 184.552 106.875 184V172.518C106.875 172.272 106.784 172.035 106.62 171.851L103.333 168.181C103.143 167.969 102.872 167.848 102.588 167.848H90.0829C89.5306 167.848 89.0829 168.296 89.0829 168.848V184C89.0829 184.552 88.6352 185 88.0829 185H81.3789C80.8266 185 80.3789 184.552 80.3789 184V141.2C80.3789 140.648 80.8266 140.2 81.3789 140.2H108.058C108.325 140.2 108.581 140.307 108.768 140.496L115.033 146.82C115.219 147.007 115.323 147.26 115.323 147.524V160.27C115.323 160.533 115.22 160.785 115.035 160.972L111.636 164.421C111.263 164.8 111.251 165.404 111.609 165.797L115.318 169.866ZM89.0829 159.68C89.0829 160.232 89.5306 160.68 90.0829 160.68H104.093C104.358 160.68 104.612 160.575 104.8 160.387L106.454 158.733C106.642 158.545 106.747 158.291 106.747 158.026V150.15C106.747 149.885 106.642 149.631 106.454 149.443L104.8 147.789C104.612 147.601 104.358 147.496 104.093 147.496H90.0829C89.5306 147.496 89.0829 147.944 89.0829 148.496V159.68Z"
      />
      <path
        className={accentClassName}
        d="M43.4863 141.2C43.4863 140.648 43.934 140.2 44.4863 140.2H74.8703C75.4226 140.2 75.8703 140.648 75.8703 141.2V146.56C75.8703 147.112 75.4226 147.56 74.8703 147.56H53.1903C52.638 147.56 52.1903 148.008 52.1903 148.56V157.888C52.1903 158.44 52.638 158.888 53.1903 158.888H73.0143C73.5666 158.888 74.0143 159.336 74.0143 159.888V165.12C74.0143 165.672 73.5666 166.12 73.0143 166.12H53.1903C52.638 166.12 52.1903 166.568 52.1903 167.12V176.64C52.1903 177.192 52.638 177.64 53.1903 177.64H74.8703C75.4226 177.64 75.8703 178.088 75.8703 178.64V184C75.8703 184.552 75.4226 185 74.8703 185H44.4863C43.934 185 43.4863 184.552 43.4863 184V141.2Z"
      />

      {/* <path
        className={accentClassName}
        d="M43 183.545C41.8954 183.545 41 182.65 41 181.545V139C41 137.895 41.8954 137 43 137H72.5455C73.65 137 74.5455 137.895 74.5455 139V145.182C74.5455 146.286 73.65 147.182 72.5455 147.182H55.6364C54.5318 147.182 53.6364 148.077 53.6364 149.182V153.182C53.6364 154.286 54.5318 155.182 55.6364 155.182H70.8182C71.9228 155.182 72.8182 156.077 72.8182 157.182V163.364C72.8182 164.468 71.9228 165.364 70.8182 165.364H55.6364C54.5318 165.364 53.6364 166.259 53.6364 167.364V171.364C53.6364 172.468 54.5318 173.364 55.6364 173.364H72.4545C73.5591 173.364 74.4545 174.259 74.4545 175.364V181.545C74.4545 182.65 73.5591 183.545 72.4546 183.545H43Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={accentClassName}
        d="M78.8926 181.545V139C78.8926 137.895 79.788 137 80.8926 137H98.9835C102.438 137 105.461 137.629 108.052 138.886C110.643 140.144 112.658 141.955 114.097 144.318C115.537 146.682 116.256 149.515 116.256 152.818C116.256 156.152 115.514 158.962 114.029 161.25C112.657 163.386 110.764 165.033 108.349 166.191L116.191 180.589C116.917 181.922 115.952 183.545 114.435 183.545H105.276C104.536 183.545 103.857 183.137 103.51 182.485L95.9023 168.182H91.5289V181.545C91.5289 182.65 90.6335 183.545 89.5289 183.545H80.8926C79.788 183.545 78.8926 182.65 78.8926 181.545ZM99.7789 157.818C98.7335 158.182 97.4683 158.364 95.9835 158.364H91.5289V149.091C91.5289 147.986 92.4244 147.091 93.5289 147.091H95.9835C97.4683 147.091 98.7335 147.295 99.7789 147.705C100.84 148.098 101.65 148.72 102.211 149.568C102.787 150.402 103.074 151.485 103.074 152.818C103.074 154.136 102.787 155.205 102.211 156.023C101.65 156.841 100.84 157.439 99.7789 157.818Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={accentClassName}
        d="M119.722 181.545V139C119.722 137.895 120.618 137 121.722 137H139.813C143.268 137 146.291 137.629 148.882 138.886C151.472 140.144 153.488 141.955 154.927 144.318C156.366 146.682 157.086 149.515 157.086 152.818C157.086 156.152 156.344 158.962 154.859 161.25C153.487 163.386 151.594 165.033 149.179 166.191L157.021 180.589C157.747 181.922 156.782 183.545 155.265 183.545H146.106C145.366 183.545 144.687 183.137 144.34 182.485L136.732 168.182H132.359V181.545C132.359 182.65 131.463 183.545 130.359 183.545H121.722C120.618 183.545 119.722 182.65 119.722 181.545ZM140.609 157.818C139.563 158.182 138.298 158.364 136.813 158.364H132.359V149.091C132.359 147.986 133.254 147.091 134.359 147.091H136.813C138.298 147.091 139.563 147.295 140.609 147.705C141.669 148.098 142.48 148.72 143.041 149.568C143.616 150.402 143.904 151.485 143.904 152.818C143.904 154.136 143.616 155.205 143.041 156.023C142.48 156.841 141.669 157.439 140.609 157.818Z"
      /> */}
    </svg>
  );
}
