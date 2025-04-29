import React from "react";
import SectionTitle from "../../components/SectionTitle";
import ChallengingStep from "../../components/ChallengingStep";
import Billingnew from "../../images/billingnew.png";
import AccontingNew from "../../images/Accountingnew.png";
import InventoryIcon from "../../images/inventory-icon-new.png";
import BusinessIcon from "../../images/business-analyticsnew.png";
import ArrowSquare from "../../images/arrows.webp";
import PersonImage from "../../images/person-new.webp";

const Challenges = () => {
    return (
        <section>
            <div className="container mx-auto">
                <SectionTitle
                heading='Solving all key challenges with the best POS software'
                subheading="Revealing common retail challenges"
                /> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <div className="flex flex-col gap-20 text-end">
                        <ChallengingStep
                            icon={Billingnew}
                            heading='Billing'
                            content='Are you facing challenges like issues in creating bills, payment integrations, GST invoicing, long billing queues, or POS glitches? Is manual billing or outdated systems slowing your billing counters?'
                        /> 
                        <ChallengingStep
                            icon={AccontingNew}
                            heading='Accounting'
                            content='Is maintaining accurate account books and daily entries of sales a time-consuming task for you? Is annual tax compliance or filing GST returns stressful for you?'
                        /> 
                    </div>
                    <div>
                        <div>
                            <img src={ArrowSquare} alt="" />
                            <div>
                                <img src={PersonImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-20">
                        <ChallengingStep
                            icon={InventoryIcon}
                            heading='Inventory'
                            content='Do you feel exhausted in managing inventory for hundreds of products, categories, and suppliers? Are you facing stock outs or excessive stock issues?'
                        /> 
                        <ChallengingStep
                            icon={BusinessIcon}
                            heading='Business Insights'
                            content='Is getting insights or tabulated reports on suppliers, customers, sales, inventory, etc. a challenge for you? Is getting precise business analytics a trouble for you?'
                        /> 
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Challenges;