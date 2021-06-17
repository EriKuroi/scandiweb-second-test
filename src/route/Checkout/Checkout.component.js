import { PureComponent } from 'react';
import SourceCheckout from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'Component/ContentWrapper';
// import our mimodified styles to override some of the default ones
import './Checkout.override.style.scss';

// re-export all the original exports from the parent theme untouched
// export * from 'SourceComponent/MyAccountOverlay/MyAccountOverlay.component';
// export { default } from 'SourceComponent/MyAccountOverlay/MyAccountOverlay.component';

/** @namespace Route/Checkout/Component */
export class Checkout extends SourceCheckout {
    stepProgressMap = {
        'SHIPPING_STEP': {
            title: 'Shipping',
            number: '1',
        },
        'BILLING_STEP': {
            title: 'Billing & Payments',
            number: '2',

        },
        'DETAILS_STEP': {
            title: 'Thank you!',
            number: '3'
        }
    };
    renderBreakpoint(step) {
        const { title = '' } = this.stepProgressMap[step];
        const { number = '' } = this.stepProgressMap[step];
        const { checkoutStep } = this.props;
        const currentNuber = this.stepProgressMap[checkoutStep].number;
        const stepDone = currentNuber > number;

        return (
            <div className='breakpoint'>
                <div className={stepDone ? 'numberPlace check' : 'numberPlace'}>
                    {!stepDone &&
                        <h4>
                            {number}
                        </h4>
                    }
                    {stepDone &&

                        <svg x="0px" y="0px" viewBox="0 0 60 60" fill="white">
                            <g>
                                <path d="M26.375,39.781C26.559,39.928,26.78,40,27,40c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411   c-0.414-0.368-1.045-0.33-1.412,0.083l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.273-1.405,0.156   c-0.345,0.432-0.275,1.061,0.156,1.406L26.375,39.781z" />
                            </g>
                        </svg>

                    }
                </div>
                <h4 className='breakpoint-title'>
                    {title}
                </h4>
            </div>
        )
    }
    renderProgressBar() {
        const { checkoutStep } = this.props;
        const isBilling = checkoutStep === 'BILLING_STEP'
        const isDetails = checkoutStep === 'DETAILS_STEP'
        console.log(checkoutStep);
        return (
            <div className='Checkout-ProgressBar'>
                <div className='sidebar done'></div>
                {this.renderBreakpoint('SHIPPING_STEP')}
                <div className={isBilling ? 'middlebar done' : 'middlebar'}></div>
                {this.renderBreakpoint('BILLING_STEP')}
                <div className={isBilling ? 'sidebar done' : 'sidebar'}></div>
            </div>
        );
    }
    render() {
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                    wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
                    label={__('Checkout page')}
                >

                    {this.renderSummary(true)}
                    <div block="Checkout" elem="Step">
                        {this.renderTitle()}
                        {this.renderGuestForm()}
                        {this.renderStep()}
                        {this.renderLoader()}
                    </div>
                    <div>
                        {this.renderSummary()}
                        {this.renderPromo()}
                        {this.renderCoupon()}
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;