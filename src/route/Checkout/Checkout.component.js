import { PureComponent } from 'react';
import SourceCheckout from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'Component/ContentWrapper';
import Test from '../../newComponents/Test/Test'
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
        },
        'BILLING_STEP': {
            title: 'Billing & Payments',
        },
        'DETAILS_STEP': {
            title: 'Thank you!',
        }
    };
    renderProgressBar() {
        const { checkoutStep } = this.props;
        const { title = '' } = this.stepProgressMap[checkoutStep];
        console.log(checkoutStep);
        return (
            <div className='Checkout-ProgressBar'>
                <div className='sidebar'></div>
                <div className='breakpoint'>
                    <div className='numberPlace'>
                        <h4>1</h4>
                    </div>
                <h4 className='breakpoint-title'>
                    Shipping
                </h4>
                </div>
                
                <div className='middlebar'></div>
                <div className='breakpoint'>
                <div className='numberPlace'>
                    <h4 >2</h4>
                </div>

                <h4 className='breakpoint-title billing'>
                    Billing & Payments
                </h4>
                </div>
                <div className='sidebar'></div>


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