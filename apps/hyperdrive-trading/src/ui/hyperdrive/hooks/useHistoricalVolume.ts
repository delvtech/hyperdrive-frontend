import { useQuery } from "react-query";
import { WagmiHookStatusType } from "src/ui/base/types";

const S3_URL =
  "https://db-delvelabs-s3-root-bucket.s3.us-east-2.amazonaws.com/root/ec2-raw/hyperVol_h.json";

interface VolumeData {
  time: string;
  volume: number;
}

interface Volume {
  time: string;
  value: number;
}

export function useHistoricalVolume(): {
  data?: Volume[];
  status: WagmiHookStatusType;
} {
  const { data, status } = useQuery({
    queryKey: ["historical-volume", S3_URL],
    queryFn: async () => {
      const requestRaw = await fetch(S3_URL);
      const requestJson = (await requestRaw.json()) as VolumeData[];

      const volumeData = requestJson.map((i) => {
        return { time: i.time.slice(0, 10), value: i.volume };
      });

      const data: Record<string, number> = {};

      volumeData.forEach((d) => {
        const key = d.time;

        if (data[key]) {
          data[key] = data[key] + d.value;
        } else {
          data[key] = d.value;
        }
      });

      return Object.entries(data).map((x) => {
        return { time: x[0], value: x[1] };
      });
    },
  });

  return { data, status };
}
