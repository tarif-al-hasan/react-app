import React from "react";
import Data from "./data";

const GroupDetails = () => {
  console.log(Data);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <p className="mb-4">
            <span id="body_lnumGroups">1024 active links</span>
          </p>
          <ul className="list-unstyled mb-5">
            {Data.map((item) => (
              <li className="results-list p-3 my-3 ">
                <div className="media mb-2">
                  <div className="media-body">
                    <h4 className="results-list-title mt-0 mb-2">
                      <img
                        className="results-group-icon mr-1"
                        src={item.icon}
                        alt="whatsapp"
                      />
                      <a
                        title="Costco vip1"
                        href="/whatsapp/costco-vip1-3696.html"
                      >
                       {item.title}
                      </a>
                    </h4>
                    <p className="results-list-text mb-2 text-break">
                      {item.describe}
                    </p>
                  </div>
                </div>
                <div className="containter border-top pt-2">
                  <div className="row">
                    <div className="col-6">
                    <i className="bi bi-tags-fill mr-2"></i>
                      <a
                        href="/whatsapp/make-money/islamabad/"
                        title="Make money in Islamabad"
                      >
                        Make money in {item.country}
                      </a>
                    </div>
                    <div className="col-6">
                 <i className="bi bi-eye-fill mr-2"></i>
                      <span>30</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GroupDetails;
