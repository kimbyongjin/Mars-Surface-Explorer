# Project Name #
  > Mars Surface Explorer

<!--
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows.

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->

## Heading ##
  > Mars Surface Explorer

## Sub-Heading ##
  > A portal through which anyone can explore the Martian Surface through the curious eyes of the "Curiosity" rover.

## Summary ##
  > Provides streamlined exploration of the martian surface by leveraging the NASA RESTful API's wealth of images, maps and scientific data. See what's on the Martian surface; navigate our nearest celestial neighbor.

## Problem ##
  > This program provides simple, interactive access to a wealth of image and scientific data about Mars.

## Solution ##
  > This app leverages NASA's Mars Rover image library to deliver an interactive exploration experience. Users have access to all 7 camers of the "Curiosity" rover, providing an unparalelled degree of visual control and exploration. The application also provides access to image libraries from the "Spirit" and "Opportunity" Mars rover programs.

## Quote from You ##
  > "This app is so fun!"

## How to Get Started ##
  > Select from one of several cameras to load up an image bank. Then, start exploring!

## Customer Quote ##
  > "I've never seen the Martian surface like this. I feel like I'm there."

## Closing and Call to Action ##
  > Space may be a the final frontier. But, we are exploring our neighboring worlds to incredible depths. Access the wealth of information gathered on behalf of science. Explore Mars!


## Notes

In creating a photo transition / animation window, I need a way to ensure I'm loading up the correct photo. I can control the displayed photo by leveraging the index of the photo that is currently displayed at the time. I could do this by adding buttons to the component, in order to cycle the photos, but I woldrather make this a timed function that can operate without any user input to the app.

Might jump into button implementation to try and ensure total functionality, then refactor to use a timed approach.

# Initializing the application