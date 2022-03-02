import React from "react";

import { Decimal, StabilityDeposit, StabilityDepositChange } from "@liquity/lib-base";

import { COIN } from "../../strings";
import { ActionDescription, Amount } from "../ActionDescription";

type StabilityActionDescriptionProps = {
  originalDeposit: StabilityDeposit;
  change: StabilityDepositChange<Decimal>;
};

export const StabilityActionDescription: React.FC<StabilityActionDescriptionProps> = ({
  originalDeposit,
  change
}) => {
  const collateralGain = originalDeposit.collateralGain.nonZero?.prettify(4).concat(" ETH");

  return (
    <ActionDescription>
      {change.depositLUSD ? (
        <>
          You are depositing{" "}
          <Amount>
            {change.depositLUSD.prettify()} {COIN}
          </Amount>{" "}
          in the Stability Pool
        </>
      ) : (
        <>
          You are withdrawing{" "}
          <Amount>
            {change.withdrawLUSD.prettify()} {COIN}
          </Amount>{" "}
          to your wallet
        </>
      )}
      {(collateralGain) && (
        <>
          {" "}
          and claiming at least{" "}
          <Amount>{collateralGain}</Amount>
        </>
      )}
      .
    </ActionDescription>
  );
};
