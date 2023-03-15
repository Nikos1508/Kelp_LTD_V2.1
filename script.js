function displayKelpFact() {
    let kelpFacts = [
      "Kelp can grow up to 60 meters (200 feet) tall in the right conditions.",
      "Kelp is an important source of food for many sea creatures, including sea otters and whales.",
      "Kelp can help to absorb carbon dioxide from the ocean, which can reduce the impact of climate change.",
      "Kelp forests are home to a wide variety of plants and animals, including sea stars, crabs, and fish.",
      "Kelp can be harvested and used for a variety of purposes, including food, fertilizer, and biofuel.",
      "Kelp was added to Minecraft in version 1.13, also known as the 'Update Aquatic'.",
      "Kelp is a type of seaweed that generates naturally in underwater biomes, such as oceans, deep oceans, and cold oceans.",
      "Kelp can grow up to a maximum height of 26 blocks, making it the tallest plant in Minecraft.",
      "Kelp grows faster if it's planted in water that's flowing downhill.",
      "Kelp can be harvested by breaking any part of the plant, and it will drop as an item that can be used as fuel in a furnace or as food for turtles.",
      "Kelp can also be used to craft dried kelp blocks, which can be used as a fuel source or as a decorative block.",
      "Kelp has a chance of spawning with sea pickles, another underwater plant that can emit light.",
      "Kelp is a great source of oxygen for players when they're underwater, as it generates air bubbles.",
      "Kelp can also be used to create a farm that automatically harvests kelp using water currents and hoppers.",
    ];
  
    let kelpFactContainer = document.getElementById("kelp-fact");
    kelpFactContainer.textContent = kelpFacts[Math.floor(Math.random() * kelpFacts.length)];
  }
  
  window.addEventListener("load", displayKelpFact);