Build the website using a feature-based folder hierarchy so it remains clean, scalable, and easy to understand.

Follow a component-based architecture where:

Each component has its own folder.

Export and import are handled cleanly from a single entry file per component.

Components can be easily added or removed without breaking layouts.

Styles (if any custom CSS is needed) are colocated with their respective components.

The layout should not collapse if a component is removed — structure should remain stable.

We will primarily use:

TailwindCSS for styling

shadcn/ui for base UI components

Prefer 21st.dev components and Magic UI MCP components when they better fit the design need

Especially use Magic UI for text animations and similar effects

Animations & Interaction

Use Framer Motion as the primary animation library.

GSAP can be used if needed (free features only).

Use Lenis for smooth scrolling.

Scroll-based animations should be implemented where appropriate.

In assets/modal/, there are video frame images.
Implement a scroll-based animation sequence using those frames (refer to the boilerplate prompt for detailed expectations).

The animations can be complex and high quality, but must:

Remain performant

Be fully responsive (desktop and mobile)

Not break layout flow

Visual & Design Direction

Aim for a strong “wow” moment and premium feel.

Maintain responsiveness across desktop and mobile devices.

For now, use Lorem Picsum placeholder images — these will be replaced later.

Ensure spacing, typography, and motion feel intentional and refined.

Product Context

We are building an AI-native platform for the construction industry in Europe.

Current modules include:
clara - tender agent - we will make a separete page for her later we are currently wworking on the lading page only
marketing company also gave me a tip but that is not awward winnign youc an chck the pdf BASM in the marketing folder

More modules will be added later.

Pages Structure (Subject to Change)

Product / Landing (Hero page)

Pricing page

Blog page

Company / About page

The structure must allow:

Easy addition of new pages

Combining or removing pages in the future

Continuous iteration and improvement

Important

Review all provided files, folders, boilerplate prompts, and competitor analysis carefully before implementation.
Understand the vision fully before structuring the project.