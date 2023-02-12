import { useEffect, useState } from "react";
import '../styles/finishing.scss'

const Finishing = ({
    billing,
    plan,
    addons,
    setActualStep,
    summarizing
}) => {
    let [total, setTotal] = useState(0)
    let [planPrice, setPlanPrice] = useState(0)

    useEffect(() => {
      setTotal(calcTotal())
    }, [summarizing])

    const calcTotal = () => {
      let totalAddonsPrice = 0
      if(addons.length > 0){
        totalAddonsPrice = addons.map(addon => addon.price).reduce((a, b) => a + b)
      }
      console.log(totalAddonsPrice)

      let planP = (() => {
          switch (plan) {
              case "arcade":
                      return 9
                  break;
          
              case "advanced":
                  return 12
              break;

              case "pro":
                  return 15
              break;
          }
      })()

        if(billing === "yearly"){
          planP = planP * 10
          totalAddonsPrice = totalAddonsPrice * 10
        }

        setPlanPrice(planP)

        const t = planP + totalAddonsPrice
        return t
    }

    return (
        <div className="summary">
          <div className="summary__bill">
            <div className="summary__bill__plan">
              <div className="summary__bill__plan__left">
                <p className="summary__bill__plan__left__title">{plan} ({billing})</p>
                <button className="summary__bill__plan__left__change" onClick={(e) => {e.preventDefault(); setActualStep(1)}}>Change</button>
              </div>
              <div className="summary__bill__plan__right">
                <p className="summary__bill__plan__right__price">${planPrice}{(billing === "yearly") ? "/yr" : "/mo"}</p>
              </div>
            </div>
            <div className="summary__bill__add-ons">
              {addons.map((addon, i) => {
                return (<div className="summary__bill__add-ons__ao" key={i}>
                  <p className="summary__bill__add-ons__ao__title">{addon.title}</p>
                  <p className="summary__bill__add-ons__ao__price">+${(billing === "yearly") ? (addon.price * 10) : addon.price}{(billing === "yearly") ? "/yr" : "/mo"}</p>
                </div>)
              })}
            </div>
          </div>
          <div className="summary__total">
            <p className="summary__total__title">Total (per {billing.slice(0, -2)})</p>
            <p className="summary__total__price">+${total}{(billing === "yearly") ? "/yr" : "/mo"}</p>
          </div>
        </div>
    );
}

export default Finishing;