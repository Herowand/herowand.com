import { createStyles, Paper, Text, rem, Image, Avatar } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";

const useStyles = createStyles(
  (theme, { isPassive }: { isPassive: boolean }) => ({
    card: {
      position: "relative",
      cursor: "pointer",
      overflow: "hidden",
      transition: "transform 150ms ease, box-shadow 100ms ease",
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,

      "&:hover": {
        boxShadow: theme.shadows.md,
        transform: "scale(1.02)",
      },

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: rem(6),
        backgroundImage: theme.fn.linearGradient(
          0,
          isPassive ? theme.colors.dark[6] : theme.colors.pink[6],
          isPassive ? theme.colors.dark[3] : theme.colors.orange[6]
        ),
      },
    },
  })
);

interface CardGradientProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
}

export function CardGradient({
  title,
  description,
  image,
  href,
}: CardGradientProps) {
  const { classes } = useStyles({ isPassive: !href });
  return (
    <Paper
      withBorder
      radius="md"
      className={classes.card}
      h="100%"
      component="a"
      href={href}
      onClick={(e) => !href && e.preventDefault()}
    >
      {image ? (
        <Image src={image} width={rem(40)} radius="md" alt="card image" />
      ) : (
        <Avatar>
          <IconLock />
        </Avatar>
      )}
      <Text size="xl" weight={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {description}
      </Text>
    </Paper>
  );
}
