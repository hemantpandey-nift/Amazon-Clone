import { Fragment } from "react";
import QuadCardCategory from "./QuadCardCategory";
import QuadCardProducts from "./QuadCardProducts";
import SingleProductCamp from "./SingleProductCamp";
import DoubleProductCamp from "./DoublePoductCamp";
import {
  campaignGrid1ImagesSample,
  campaignGrid2ImagesSample,
  campaignGrid3ImagesSample,
  campaignGrid4ImagesSample,
} from "../../store/sampledata";

const CampaignCardGridTop = () => {
  return (
    <Fragment>
      <div style={{ marginLeft: "15px" }}>
        <QuadCardCategory images={campaignGrid1ImagesSample} />
      </div>
      <div>
        <SingleProductCamp images={campaignGrid3ImagesSample} />
      </div>
      <div>
        <QuadCardProducts images={campaignGrid2ImagesSample} />
      </div>
      <div>
        <DoubleProductCamp images={campaignGrid4ImagesSample} />
      </div>{" "}
    </Fragment>
  );
};

export default CampaignCardGridTop;
