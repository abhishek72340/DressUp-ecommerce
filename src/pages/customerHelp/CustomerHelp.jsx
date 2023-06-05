import React from 'react'
import {
  Box, AccordionPanel, AccordionItem,
  AccordionIcon, AccordionButton, Accordion
}
  from '@chakra-ui/react';
import { Module } from '../../module/Module';
export const CustomerHelp = () => {
  return (
    <div style={{ margin: '2rem' }}>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                How secure is your e-commerce platform?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our e-commerce platform employs industry-standard security measures, including encryption protocols, firewalls, and secure payment gateways, to ensure the security and confidentiality of your personal and financial information.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                How long will it take to receive my order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The delivery time depends on the product, shipping method, and your location. We strive to process and ship orders as quickly as possible, and you can find estimated delivery times during the checkout process.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Can I track the status of my order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, once your order is shipped, we provide a tracking number that you can use to track the status of your package. You can usually find the tracking information in your order confirmation email or on our website.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                What is your return policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We have a hassle-free return policy. If you are not satisfied with your purchase, you can return it within a specified timeframe for a refund or exchange, subject to certain terms and conditions. Please refer to our Returns and Refunds page for detailed information.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Are there any additional costs, such as taxes or shipping fees?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Taxes and shipping fees may apply depending on your location and the nature of the product. During the checkout process, any applicable taxes and shipping fees will be clearly displayed before you finalize your purchase.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                How can I contact your customer support?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We offer multiple channels for customer support, including email, phone and live chat,. You can find our contact information on our website's "Contact" page. Our dedicated support team is available to assist you with any questions or concerns you may have.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Do you offer discounts or promotions?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, we frequently offer discounts, promotions, and special deals. You can stay updated by subscribing to our newsletter or following our social media channels. Additionally, keep an eye out for seasonal sales and holiday offers to get the best deals.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', fontSize: '1.1rem', fontWeight: 'lighter' }}>For Help : <span style={{ color: 'lightseagreen', fontWeight: 'bold' }}>9335-8930-77</span></div>
      <Module />
    </div>
  )
}
