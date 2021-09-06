import { Fragment } from "react";
import QuadCardProducts from "./QuadCardProducts";
import PrimeVideoCamp from "./PrimeVideoCamp";
import {
  campaignGrid5ImagesSample,
  campaignGrid6ImagesSample,
  campaignGrid7ImagesSample,
} from "../../store/sampledata";

const CampaignCardGridBottom = () => {
  return (
    <Fragment>
      <div>
        <PrimeVideoCamp images={campaignGrid5ImagesSample} />
      </div>
      <div>
        <QuadCardProducts images={campaignGrid6ImagesSample} />
      </div>
      <div>
        <QuadCardProducts images={campaignGrid7ImagesSample} />
      </div>
    </Fragment>
  );
};

export default CampaignCardGridBottom;
