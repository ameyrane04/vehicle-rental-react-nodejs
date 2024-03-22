import React from 'react'

function ReviewsSection() {

    const fakeReviews = [
        { id: 1, name: "Alex Doe", rating: 5, comment: "Fantastic service! Highly recommended.", date: "2023-03-15" },
        { id: 2, name: "Jamie Smith", rating: 4, comment: "Great selection of vehicles and friendly staff.", date: "2023-03-10" },
        { id: 3, name: "Jordan Lee", rating: 5, comment: "Booking was easy and hassle-free. Will use again!", date: "2023-03-08" },
      ];
      
    // You can adjust the path to your specific background image
    const backgroundImage = "https://www.avis.com/content/dam/avis/na/us/common/offers/avis-location-pocatello-idaho_v2.jpg/jcr:content/renditions/cq5dam.web.750.750.webp";
  
    return (
      <div className="bg-cover bg-center py-12" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fakeReviews.map(review => (
              <div key={review.id} className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-500"></i> // Star icon
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <i key={i} className="far fa-star text-yellow-500"></i> // Empty star icon
                  ))}
                </div>
                <p className="text-gray-800 text-lg">{review.comment}</p>
                <p className="text-right text-sm text-gray-600">- {review.name}, {review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  

export default ReviewsSection
