// This configuration file is a single place to provide any values to set up the app

export const IDENTITY_POOL_ID = "ap-northeast-1:9e900ac2-628e-4b29-ae62-97e0d4316d76"; // REQUIRED - Amazon Cognito Identity Pool ID

export const REGION = "ap-northeast-1"; // REQUIRED - Amazon Cognito Region

export const MAP = {
  NAME: "20241213", // REQUIRED - Amazon Location Service map resource name
  STYLE: "VectorEsriStreets", // REQUIRED - String representing the style of map resource
};

export const PLACE = "20241213"; // REQUIRED - Amazon Location Service place index resource name

export const ROUTE = "20241213"; // REQUIRED - Amazon Location Service route calculator resource name

export const GEOFENCE = "20241213"; // REQUIRED - Amazon Location Service geofence collection resource name

export const TRACKER = "20241213"; // REQUIRED - Amazon Location Service tracker resource name

export const TRACKER_SIMULATED_DEVICE = "Vehicle-1";  // REQUIRED - Simulated Device ID (Defaulting to Vehicle-1)
