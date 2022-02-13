type OS = 'windows' | 'linux' | 'mac';
interface Props {
  os: OS;
}

export const DownloadButton = ({ os }: Props) => {
  return (
    <a
      className="py-6"
      href={`downloads/launcher.${getExtension(os)}`}
      download={`AlcaLauncherInstaller.${getExtension(os)}`}
    >
      {/* <span className={styles.container}> */}
      <span className="w-64 md:w-96 bg-gray-100 hover:bg-indigo-600 shadow-lg transition duration-300 rounded-full py-5 px-8 flex flex-col md:flex-row justify-between items-center">
        <img className="w-3/12" src={`assets/images/${os}.png`} alt="logo" />
        <span className="w-6/12 text-lg text-center uppercase font-bold">
          Download for {os}
        </span>
        <img
          className="w-2/12"
          src={`assets/images/download.png`}
          alt="download"
        />
      </span>
    </a>
  );
};

const getExtension = (os: OS) => {
  switch (os) {
    case 'windows':
      return 'exe';
    case 'linux':
      return 'deb';
    case 'mac':
      return 'dmg';
    default:
      return 'exe';
  }
};
