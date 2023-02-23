import { useForm } from "@mantine/form";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  MantineProvider,
} from "@mantine/core";
import MantineNavbar from "../components/Navbar";
export default function create_campaign() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          // InputWrapper: {
          //   styles: (theme) => ({
          //     label: {
          //       backgroundColor:
          //         theme.colorScheme === "dark"
          //           ? "rgba(255, 255, 255, .1)"
          //           : "rgba(0, 0, 0, .1)",
          //     },
          //   }),
          // },

          Input: {
            styles: (theme) => ({
              input: {
                borderColor: theme.colors.violet[theme.fn.primaryShade()],
                borderRadius: 4,
              
              },
            }),
          },
        },
      }}>
      <MantineNavbar />
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        style={{ width: "50%", margin: "auto" }}>
        <TextInput
          withAsterisk
          label='Raising Amount'
          placeholder='Raising Amount'
          {...form.getInputProps("email")}
        />

        <TextInput label='Type' placeholder='Type' />
        <TextInput label='Deadline' placeholder='Deadline' />
        <TextInput label='Milestones' placeholder='Milestones' />
        <TextInput label='Refund Policy' placeholder='Refund Policy' />

        <Group position='center' mt='md'>
          <Button type='submit'>Submit</Button>
        </Group>
      </form>
    </MantineProvider>
  );
}
