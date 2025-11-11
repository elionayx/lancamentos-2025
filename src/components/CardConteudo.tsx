import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CardProps {
  titulo: string;
  data?: string;
  imagem?: string;
}

export function CardConteudo({ titulo, data, imagem }: CardProps) {
  return (
    <Card sx={{ width: 180, margin: 1 }}>
      {imagem && (
        <CardMedia
          component="img"
          height="250"
          image={`https://image.tmdb.org/t/p/w200${imagem}`}
          alt={titulo}
        />
      )}
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
