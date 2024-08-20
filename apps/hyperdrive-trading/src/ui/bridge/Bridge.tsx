import { ReactElement } from "react";

export function Bridge(): ReactElement {
  return (
    <div className="m-6 flex flex-col space-y-6">
      <iframe
        height="684px"
        width="440px"
        src="https://v2.widget.squidrouter.com/iframe?config=%7B%22integratorId%22%3A%22squid-swap-widget-v2%22%2C%22companyName%22%3A%22Squid%22%2C%22style%22%3A%7B%22widgetContainer%22%3A%7B%22className%22%3A%22squid-widget-animated-container%22%7D%2C%22neutralContent%22%3A%22%23ffffff%22%2C%22baseContent%22%3A%22%23ffffff%22%2C%22base100%22%3A%22%231a272c%22%2C%22base200%22%3A%22%2311191d%22%2C%22base300%22%3A%22%23000000%22%2C%22error%22%3A%22%23ED6A5E%22%2C%22warning%22%3A%22%23FFB155%22%2C%22success%22%3A%22%232EAEB0%22%2C%22primary%22%3A%22%2318ffab%22%2C%22secondary%22%3A%22%2318ffab%22%2C%22secondaryContent%22%3A%22%23F7F6FB%22%2C%22neutral%22%3A%22%2311191d%22%2C%22roundedBtn%22%3A%2226px%22%2C%22roundedCornerBtn%22%3A%22999px%22%2C%22roundedBox%22%3A%221rem%22%2C%22roundedDropDown%22%3A%2220rem%22%7D%2C%22infiniteApproval%22%3Afalse%2C%22enableExpress%22%3Atrue%2C%22apiUrl%22%3A%22https%3A%2F%2Fapiplus.squidrouter.com%22%2C%22comingSoonChainIds%22%3A%5B%5D%2C%22onChainQuoting%22%3Afalse%2C%22titles%22%3A%7B%22swap%22%3A%22Swap%22%2C%22settings%22%3A%22Settings%22%2C%22wallets%22%3A%22Wallets%22%2C%22tokens%22%3A%22Select%20Token%22%2C%22chains%22%3A%22Select%20Chain%22%2C%22history%22%3A%22History%22%2C%22transaction%22%3A%22Transaction%22%2C%22allTokens%22%3A%22Select%20Token%22%2C%22destination%22%3A%22Destination%20address%22%7D%2C%22priceImpactWarnings%22%3A%7B%22warning%22%3A3%2C%22critical%22%3A5%7D%2C%22showOnRampLink%22%3Atrue%7D"
      />
    </div>
  );
}

export default Bridge;
