import { useQuery } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { QueryStatusType } from "src/ui/base/types";

/** Type fetched from the API */
interface VolumeData {
  time: string;
  volume: number;
}

/** Type supported by light-weight charts histogram series */
interface Volume {
  time: string;
  value: number;
}

interface UseHistoricalVolumeResult {
  data?: Volume[];
  status: QueryStatusType;
}

export function useHistoricalVolume(
  market: HyperdriveMarket,
): UseHistoricalVolumeResult {
  const { data, status } = useQuery({
    queryKey: ["historical-volume", market.address],
    queryFn: async () => {
      const requestRaw = await fetch(getMarketVolumeURL());
      const volumeData = (await requestRaw.json()) as VolumeData[];

      // slice the hour time from the timestamp
      const volume: Volume[] = volumeData.map((i) => {
        return { time: i.time.slice(0, 10), value: i.volume };
      });

      // record to store volume data by day
      const data: Record<string, number> = {};

      volume.forEach((v) => {
        const key = v.time;
        if (data[key]) {
          data[key] = data[key] + v.value;
        } else {
          data[key] = v.value;
        }
      });

      // transform record to array
      return Object.entries(data).map((x) => {
        return { time: x[0], value: x[1] };
      });
    },
  });

  return { data, status };
}

const BASE_URL =
  "https://db-delvelabs-s3-root-bucket.s3.us-east-2.amazonaws.com/root/ec2-raw/hyperVol_h.json";

// TODO: fetch by hyperdrive market address when API supports this
function getMarketVolumeURL() {
  return BASE_URL;
}
