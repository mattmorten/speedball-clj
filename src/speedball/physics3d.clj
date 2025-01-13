(ns speedball.physics3d
  (:require [malli.core :as mc]
            [malli.instrument :as mi]
            [speedball.core :as core]))



(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)


(defn degrees-to-radians [degrees]
  (* degrees (/ Math/PI 180)))

(defn degrees-to-radians [degrees]
  (* degrees (/ Math/PI 180)))


(defn calculate-position-parab
  "Calculates the position of the ball relative to the thrower at a given time.
   Parameters:
   - speed: Initial speed of the throw (m/s).
   - angle-up: Angle upwards from the ground (degrees).
   - angle-z: Angle around the Z-axis (degrees).
   - time: Time since the throw (seconds).
   - g: Gravitational acceleration (m/s^2), default is Earth's gravity (9.81 m/s^2)."
  [speed angle-up angle-z time & {:keys [g] :or {g 9.81}}]
  (let [angle-up-rad (degrees-to-radians angle-up)
        angle-z-rad  (degrees-to-radians angle-z)
        vx (* speed (Math/cos angle-up-rad) (Math/cos angle-z-rad))
        vy (* speed (Math/cos angle-up-rad) (Math/sin angle-z-rad))
        vz (* speed (Math/cos angle-up-rad))
        x (* vx time)
        y (* vy time)
        z (+ (* vz time) (* -0.5 g (Math/pow time 2)))] ; Incorporates gravity in the z-axis
    {:speed speed :x x :y y :z (max z 0)})) ; Ensures z (height) doesn’t go below ground level (0)


(defn time-to-hit-ground
  "Calculates the time (in seconds) at which a thrown ball hits the ground.
   Parameters:
   - speed: Initial speed of the throw (m/s).
   - angle-up: Angle above the horizontal (degrees).
   - height: Initial height above the ground (meters).
   - g: Gravitational acceleration (m/s^2), default is Earth's gravity (9.81 m/s^2).
   Returns:
   - Time (seconds) when the ball hits the ground."
  [speed angle-up height & {:keys [g] :or {g 9.81}}]
  (let [angle-rad (degrees-to-radians angle-up)
        vz0 (* speed (Math/sin angle-rad)) ; Initial vertical velocity
        a (/ g 2)
        b (- vz0)
        c (- height)
        discriminant (- (* b b) (* 4 a c))]
    (if (neg? discriminant)
      (throw (Exception. "No solution: Ball does not hit the ground."))
      (let [t1 (/ (+ (- b) (Math/sqrt discriminant)) (* 2 a))
            t2 (/ (- (- b) (Math/sqrt discriminant)) (* 2 a))]
        (max t1 t2))))) ; Return the positive root

(defn calculate-velocity
  "Calculate the velocity components given speed and angle in degrees."
  [speed angle]
  (let [angle-rad (degrees-to-radians angle)]
    {:vx (* speed (Math/cos angle-rad))
     :vy (* speed (Math/sin angle-rad))}))

(defn update-position
  "Update the position of the object in 2D space.
   Parameters:
   - pos: Current position [x y].
   - vel: Velocity components {:vx, :vy}.
   - dt: Time step (seconds)."
  [[x y] {:keys [vx vy]} dt]
  [(+ x (* vx dt))
   (+ y (* vy dt))])

(defn calculate-position-ground
  "Simulates the motion of an object in 2D space.
   Parameters:
   - initial-pos: Starting position [x y].
   - speed: Speed of the object.
   - angle: Direction of movement (degrees).
   - duration: Total simulation time (seconds).
   - dt: Time step (seconds)."
  [initial-pos speed angle duration dt]
  (let [velocity (calculate-velocity speed angle)]
    (mapv (fn [t]
            {:time t
             :position (update-position initial-pos velocity (* t dt))})
          (range 0 (int (/ duration dt))))))

;; Example Usage
(defn calculate-position
  [speed angle-up angle-z time]
  (let [v-decay 10.0
        time-at-ground (time-to-hit-ground speed angle-up 0)]
    (if (<= time time-at-ground)
      (let [output (calculate-position-parab speed angle-up angle-z time)]
        (assoc output :time time :time-at-ground time-at-ground :method :parab))
      (let [output-at-ground (calculate-position-parab speed angle-up angle-z time-at-ground)
            {x-at-ground :x y-at-ground :y} output-at-ground]
        (loop [x x-at-ground y y-at-ground time-after-ground 1]
          (let [speed (Math/max 0.0 (double (- speed (* v-decay time-after-ground))))]
            (if (or (zero? speed) (>= (+ time-at-ground time-after-ground) time))
              {:speed speed :x x :y y :z 0 :method :ground :time time :time-after-ground time-after-ground}
              (let [angled-velocity (calculate-velocity speed angle-z)
                    [new-x new-y] (update-position [x y] angled-velocity time-after-ground)]
                (recur new-x new-y (inc time-after-ground))))))))))

(defn kinematic-output->position
  [{x :x y :y z :z}]
  [(Math/round ^double x) (Math/round ^double y) (Math/round ^double z)])

(defn position-table
  [speed angle-up angle-z duration]
  (let [numbers (for [i (range duration)]
                  (calculate-position speed angle-up angle-z i))]
    (map kinematic-output->position numbers)))

;(position-table 80 45 30 22)

(defn normalize-x-z
  [view-width view-height position-table]
  (let [total-time (count position-table)]
    (for [time (range total-time)]
       (let [position (nth position-table time)
             [x _ z] position
             max-x (apply max (map (fn [[x _ _]] x) position-table))
             max-z (apply max (map (fn [[_ _ z]] z) position-table))
             dx (/  view-width max-x)
             dz (/  view-height max-z)
             x (Math/floor (* x dx))
             z (Math/floor (* z dz))]
         [(int x) (int z)]))))

;(let [position-table (position-table 80 45 30 22)]
;  (for [i (range 22)]
;    (normalize-x-z position-table 50 10 i)))

(defn render
  [[x z] view-width view-height]
  (println x z)
  (dotimes [i view-height]
    (print "|")
    (dotimes [j view-width]
      (if (and (= z (- view-height i 1)) (= x j))
        (print "+")
        (print " ")))
    (print "\n"))
  (dotimes [_ view-width]
    (print "_")))

(defn render-all
  [view-width view-height normalized-all]
  (let [total-time (count normalized-all)]
    (dotimes [i total-time]
      (let [normalized (nth normalized-all i)]
        (render normalized 30 10)
        (Thread/sleep 1000)))))

(->> (position-table 80 45 30 22)
     (normalize-x-z 30 10)
     (render-all 30 10))

(comment
  "I tried to do something clever with 3D kinematics, but I don't think it really worked out. Next step instead is to rework this, just using 2D positions. We can model the Z axis separately later. Model a constant speed while in the air. We know the ball is in the air for X seconds depending on how fast you've thrown it. Once it hits the ground you can decay the speed.")



