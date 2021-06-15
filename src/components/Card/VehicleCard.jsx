/* Core */
import React from 'react';

/* Material */
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './VehicleCard.css.js';

/* Utils */
import { classes } from '../../utils.js'

export const VehicleCard = ({ vehicle, setInMaintenance }) => {
  return (
    <Card style={classes(styles.cardContainer, vehicle?.in_maintenance && styles.inMaintenance)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Vehicle"
          height="140"
          image={vehicle?.image}
          title="Vehicle"
          style={styles.image}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="h3">
            {`${vehicle?.vehicle_id} - ${vehicle?.make} ${vehicle?.model}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {vehicle?.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {vehicle?.estimatedate?.substring(0, 10)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {vehicle?.km ? `${vehicle?.km} km` : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {vehicle?.person || ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Checkbox
          checked={!!vehicle?.in_maintenance}
          onClick={() => setInMaintenance(vehicle)}
          color="default"
        />
        <Typography variant="body2" color="textSecondary" component="p" onClick={() => setInMaintenance(vehicle)} style={styles.maintenanceButton}>
          In Maintenance
        </Typography>
      </CardActions>
    </Card>
  );
}